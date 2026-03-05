import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ChipModel3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const W = mount.clientWidth
    const H = mount.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    // Scene & camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100)
    camera.position.set(0, 2.2, 5.5)
    camera.lookAt(0, 0, 0)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0x00b4d8, 2.8)
    keyLight.position.set(3, 5, 4)
    keyLight.castShadow = true
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x48cae4, 1.2)
    fillLight.position.set(-4, 2, -2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8)
    rimLight.position.set(0, -3, -4)
    scene.add(rimLight)

    const group = new THREE.Group()
    scene.add(group)

    // --- Chip body ---
    const bodyGeo = new THREE.BoxGeometry(2.8, 0.28, 2.8)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0a1628,
      roughness: 0.35,
      metalness: 0.55,
    })
    const body = new THREE.Mesh(bodyGeo, bodyMat)
    body.castShadow = true
    group.add(body)

    // --- Die (top center silicon square) ---
    const dieGeo = new THREE.BoxGeometry(1.5, 0.06, 1.5)
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x112240,
      roughness: 0.2,
      metalness: 0.8,
    })
    const die = new THREE.Mesh(dieGeo, dieMat)
    die.position.y = 0.17
    group.add(die)

    // --- Etched trace grid on die ---
    const traceCount = 5
    const traceSpacing = 1.5 / (traceCount + 1)
    const traceMat = new THREE.LineBasicMaterial({ color: 0x00b4d8, transparent: true, opacity: 0.45 })

    for (let i = 1; i <= traceCount; i++) {
      const offset = -0.75 + i * traceSpacing
      const hGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.75, 0.205, offset),
        new THREE.Vector3(0.75, 0.205, offset),
      ])
      group.add(new THREE.Line(hGeo, traceMat))
      const vGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(offset, 0.205, -0.75),
        new THREE.Vector3(offset, 0.205, 0.75),
      ])
      group.add(new THREE.Line(vGeo, traceMat))
    }

    // --- Gold bond wires ---
    const wireMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.3, metalness: 0.9 })
    const wirePositions = [
      { axis: 'x', edge: -1.4, sign: -1 },
      { axis: 'x', edge: 1.4,  sign:  1 },
      { axis: 'z', edge: -1.4, sign: -1 },
      { axis: 'z', edge: 1.4,  sign:  1 },
    ]
    const wireOffsets = [-0.45, -0.15, 0.15, 0.45]

    for (const { axis, edge, sign } of wirePositions) {
      for (const off of wireOffsets) {
        const pts = []
        for (let t = 0; t <= 1; t += 0.05) {
          const x = axis === 'x' ? sign * 0.75 + (edge - sign * 0.75) * t : off
          const z = axis === 'z' ? sign * 0.75 + (edge - sign * 0.75) * t : off
          const y = 0.2 + 0.28 * Math.sin(Math.PI * t)
          pts.push(new THREE.Vector3(x, y, z))
        }
        const curve = new THREE.CatmullRomCurve3(pts)
        const tubeGeo = new THREE.TubeGeometry(curve, 10, 0.012, 4, false)
        group.add(new THREE.Mesh(tubeGeo, wireMat))
      }
    }

    // --- BGA solder balls (bottom) ---
    const ballGeo = new THREE.SphereGeometry(0.09, 10, 10)
    const ballMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, roughness: 0.25, metalness: 0.85 })
    const ballSpacing = 0.32
    const ballCols = 7

    for (let row = 0; row < ballCols; row++) {
      for (let col = 0; col < ballCols; col++) {
        const ball = new THREE.Mesh(ballGeo, ballMat)
        ball.position.set(
          -ballSpacing * (ballCols - 1) / 2 + col * ballSpacing,
          -0.21,
          -ballSpacing * (ballCols - 1) / 2 + row * ballSpacing
        )
        group.add(ball)
      }
    }

    // --- Corner gold markers ---
    const markerGeo = new THREE.BoxGeometry(0.08, 0.04, 0.08)
    const markerMat = new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.3, metalness: 0.9 })
    for (const [x, y, z] of [[-1.2, 0.16, -1.2], [1.2, 0.16, -1.2]]) {
      const m = new THREE.Mesh(markerGeo, markerMat)
      m.position.set(x, y, z)
      group.add(m)
    }

    // --- Particle halo ---
    const particleCount = 120
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2.2 + Math.random() * 1.4
      positions[i * 3]     = Math.cos(angle) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00b4d8,
      size: 0.06,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // --- Animation loop ---
    let frameId
    let t = 0
    function animate() {
      frameId = requestAnimationFrame(animate)
      t += 0.008
      group.rotation.y = t * 0.55
      group.rotation.x = Math.sin(t * 0.3) * 0.18
      group.position.y = Math.sin(t * 0.5) * 0.12
      particles.rotation.y = t * 0.08
      particles.rotation.x = t * 0.03
      renderer.render(scene, camera)
    }
    animate()

    function handleResize() {
      const W2 = mount.clientWidth
      const H2 = mount.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true"
    />
  )
}
