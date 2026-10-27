const chapters = [
  {
    title: "Physical Quantities and Measurement",
    summary: "Build a precise foundation for measuring the physical world, from SI units to instruments and significant figures.",
    pointTitles: ["SI Units", "Metric Prefixes", "Density", "Vernier Calipers", "Screw Gauge", "Measurement Error", "Simple Pendulum"],
    points: [
      "Fundamental and derived quantities; SI base units: m, kg, s, A, K, mol, cd.",
      "Prefixes and scale: kilo, milli, micro, and other common metric prefixes.",
      "Density: ρ = m/V.",
      "Vernier calipers: LC = 1 MSD ÷ number of VSD; reading = MSR + (VSR × LC).",
      "Screw gauge: LC = pitch ÷ number of circular scale divisions; reading = linear + (circular × LC).",
      "Zero error, zero correction, and significant figures.",
      "Simple pendulum: T = 2π√(l/g)."
    ],
    visualize: "A working vernier and screw gauge where you drag the jaw and read the value, plus a pendulum with adjustable length."
  },
  {
    title: "Motion",
    summary: "Describe how objects move using equations, graphs, vectors, and the geometry of projectiles and circular paths.",
    pointTitles: ["Motion Basics", "Average Speed", "Motion Equations", "Nth Second", "Free Fall", "Projectile Motion", "Circular Motion", "Motion Graphs"],
    points: [
      "Distance vs displacement, speed vs velocity, and acceleration.",
      "Average speed = total distance ÷ total time; a = (v − u)/t.",
      "Equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as.",
      "Distance in the nth second: sₙ = u + a(2n − 1)/2.",
      "Free fall: v = gt, h = ½gt², with g ≈ 9.8 m/s².",
      "Projectile motion: T = 2u sinθ/g, H = u² sin²θ/2g, R = u² sin2θ/g.",
      "Circular motion: v = ωr, ω = 2π/T, aᶜ = v²/r.",
      "Relative velocity and distance-time / velocity-time graphs; slope and area reveal physical meaning."
    ],
    visualize: "A live velocity-time graph linked to a moving object, a projectile launcher with angle and speed controls, and a circular motion vector animation."
  },
  {
    title: "Force",
    summary: "See how forces change motion, create momentum, produce rotation, and keep systems in equilibrium.",
    pointTitles: ["Newton’s Laws", "Momentum", "Collisions", "Friction", "Centripetal Force", "Gravitation", "Resultant Force", "Torque"],
    points: [
      "Newton’s three laws; F = ma; 1 N = 1 kg·m/s².",
      "Momentum p = mv; impulse = FΔt = Δp.",
      "Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
      "Friction: f = μN; static, kinetic, and rolling friction with their advantages and disadvantages.",
      "Centripetal force: F = mv²/r.",
      "Gravitation: F = Gm₁m₂/r², g = GM/R², and weight W = mg.",
      "Resultant forces: R = √(P² + Q² + 2PQ cosθ); resolve a force into components.",
      "Torque = force × perpendicular distance; equilibrium, centre of gravity, and stability."
    ],
    visualize: "A collision lab with elastic and inelastic modes, a draggable force-vector parallelogram, and a block on an adjustable incline."
  },
  {
    title: "Work, Power and Energy",
    summary: "Track energy as it moves between forms, and connect force, motion, machines, and efficiency.",
    pointTitles: ["Work", "Energy", "Work-Energy", "Conservation", "Power", "Efficiency", "Simple Machines", "Mass-Energy"],
    points: [
      "Work: W = Fs cosθ, measured in joules.",
      "Kinetic energy KE = ½mv²; potential energy PE = mgh.",
      "Work-energy theorem: W = ΔKE.",
      "Conservation of energy and energy transformations.",
      "Power: P = W/t; 1 hp = 746 W; 1 kWh = 3.6 × 10⁶ J.",
      "Efficiency = (useful output ÷ input) × 100%.",
      "Simple machines: MA = load/effort, VR = effort distance ÷ load distance, efficiency = MA/VR.",
      "Mass-energy: E = mc²; renewable and non-renewable energy."
    ],
    visualize: "A roller coaster or pendulum with live kinetic and potential energy bars, plus a lever with a draggable fulcrum."
  },
  {
    title: "State of Matter and Pressure",
    summary: "Move from particles to pressure and discover why materials stretch, float, flow, and transmit force.",
    pointTitles: ["Particle Model", "Elasticity", "Young’s Modulus", "Pressure", "Pascal’s Law", "Buoyancy", "Atmospheric Pressure", "Surface Effects"],
    points: [
      "Properties of solids, liquids, and gases through the particle model.",
      "Elasticity: stress = F/A, strain = ΔL/L, and Hooke’s law.",
      "Young’s modulus Y = (F·L)/(A·ΔL); bulk and shear modulus.",
      "Pressure: P = F/A, measured in pascals; liquid pressure P = ρgh.",
      "Pascal’s law and the hydraulic press: F₁/A₁ = F₂/A₂.",
      "Archimedes’ principle: buoyant force = ρᶠˡᵘⁱᵈ × Vᵈⁱˢᵖˡᵃᶜᵉᵈ × g.",
      "Floating and sinking conditions; atmospheric pressure, barometer, and manometer.",
      "Surface tension, viscosity, and capillarity."
    ],
    visualize: "Stretch a wire along a stress-strain curve, operate a hydraulic press, and place objects into liquids with different densities."
  },
  {
    title: "Effect of Heat on Matter",
    summary: "Follow heat through temperature changes, phase changes, expansion, gas laws, and the three paths of heat transfer.",
    pointTitles: ["Temperature Scales", "Heat Capacity", "Latent Heat", "Thermal Expansion", "Water Anomaly", "Gas Laws", "Ideal Gas", "Calorimetry", "Heat Transfer"],
    points: [
      "Temperature scales: C/5 = (F − 32)/9 = (K − 273)/5.",
      "Heat Q = mcΔT; heat capacity = mc.",
      "Latent heat: Q = mL for fusion and vaporization.",
      "Thermal expansion: ΔL = αLΔT; β = 2α for area and γ = 3α for volume.",
      "Anomalous expansion of water; maximum density occurs at 4 °C.",
      "Boyle’s law PV = constant; Charles’ law V/T = constant; pressure law P/T = constant.",
      "Combined gas law PV/T = constant and the ideal gas law PV = nRT.",
      "Calorimetry: heat lost = heat gained.",
      "Heat transfer by conduction, convection, and radiation."
    ],
    visualize: "A heating curve with temperature plateaus at phase changes and a gas piston with pressure, volume, and temperature controls."
  },
  {
    title: "Waves and Sound",
    summary: "Understand how disturbances travel, combine, resonate, and become the sounds we hear.",
    pointTitles: ["Wave Types", "Wave Equation", "Sound Speed", "Sound Media", "Echo", "Wave Behaviors", "Sound Qualities", "Hearing Range"],
    points: [
      "Mechanical vs electromagnetic waves; transverse vs longitudinal waves.",
      "Wave equation v = fλ; period T = 1/f; amplitude, wavelength, and phase.",
      "Speed of sound ≈ 332 m/s at 0 °C, increasing by about 0.6 m/s per °C.",
      "Sound travels fastest in solids and slowest in gases.",
      "Echo: d = vt/2; the minimum distance for a clear echo is about 17 m.",
      "Reflection, refraction, interference, superposition, and resonance.",
      "Pitch relates to frequency; loudness relates to amplitude and intensity; quality relates to timbre.",
      "Audible range 20 Hz–20 kHz; infrasound, ultrasound, sonar, and medical imaging."
    ],
    visualize: "A wave generator with frequency, wavelength, and amplitude controls, two-wave interference, and an echo timer."
  },
  {
    title: "Reflection of Light",
    summary: "Trace light rays across mirrors and predict image position, size, orientation, and type.",
    pointTitles: ["Reflection Laws", "Plane Mirrors", "Rotating Mirrors", "Spherical Mirrors", "Mirror Formula", "Sign Convention", "Ray Diagrams"],
    points: [
      "Laws of reflection: i = r; the incident ray, reflected ray, and normal are coplanar.",
      "Plane mirror images are virtual, upright, laterally inverted, and the same size.",
      "A rotating mirror turns the reflected ray by 2θ.",
      "Spherical mirror terms: pole, focus, and centre of curvature; f = R/2.",
      "Mirror formula: 1/f = 1/u + 1/v; magnification m = −v/u = h′/h.",
      "Sign convention for mirror calculations.",
      "Ray diagrams for every object position and mirror uses such as rear-view mirrors, shaving mirrors, and headlights."
    ],
    visualize: "Drag an object around a concave or convex mirror and watch the ray tracing and image properties update live."
  },
  {
    title: "Refraction of Light",
    summary: "Explore how light bends through materials, lenses, and prisms, from total internal reflection to the human eye.",
    pointTitles: ["Snell’s Law", "Apparent Depth", "Critical Angle", "Total Reflection", "Prism Dispersion", "Lens Formula", "Combined Lenses", "Optical Instruments"],
    points: [
      "Snell’s law: n = sin i / sin r; refractive index n = c/v.",
      "Real depth ÷ apparent depth = n.",
      "Critical angle: sin C = 1/n; total internal reflection.",
      "Applications of total internal reflection: optical fibre, mirage, and diamond sparkle.",
      "Prism formula: n = sin((A + δ)/2) / sin(A/2); dispersion and rainbow formation.",
      "Lens formula: 1/f = 1/v − 1/u; magnification m = v/u; power P = 1/f in dioptres.",
      "Combined lenses: P = P₁ + P₂.",
      "The human eye, myopia, hypermetropia, microscope, and telescope."
    ],
    visualize: "Bend a ray at an interface with an index slider, trigger total internal reflection, trace a lens, and split white light through a prism."
  },
  {
    title: "Static Electricity",
    summary: "Make invisible charge visible through forces, fields, potential, capacitors, and electrostatic induction.",
    pointTitles: ["Charge", "Charge Quantization", "Charging Methods", "Coulomb’s Law", "Electric Field", "Potential", "Capacitors", "Electrostatics"],
    points: [
      "Charge Q = ne; elementary charge e = 1.6 × 10⁻¹⁹ C.",
      "Conservation and quantization of charge.",
      "Charging by friction, conduction, and induction; the electroscope.",
      "Coulomb’s law: F = kq₁q₂/r², with k = 9 × 10⁹ N·m²/C².",
      "Electric field E = F/q = kQ/r² and field lines.",
      "Electric potential V = W/q = kQ/r.",
      "Capacitors: C = Q/V; parallel plate capacitance C = ε₀A/d; energy U = ½CV².",
      "Capacitors in series and parallel; lightning, conductors, and the Van de Graaff generator."
    ],
    visualize: "Drag positive and negative charges to see field lines and force vectors; change capacitor plate area and separation."
  },
  {
    title: "Current Electricity",
    summary: "Build circuits and connect charge flow to resistance, power, energy bills, cells, and household safety.",
    pointTitles: ["Current", "Ohm’s Law", "Resistance", "Electric Power", "Joule Heating", "Energy Bills", "Internal Resistance", "Circuit Safety"],
    points: [
      "Current I = Q/t; potential difference V = W/Q.",
      "Ohm’s law V = IR; resistivity R = ρL/A.",
      "Series resistance R = R₁ + R₂; parallel resistance 1/R = 1/R₁ + 1/R₂.",
      "Electrical power P = VI = I²R = V²/R.",
      "Joule heating H = I²Rt.",
      "Electrical energy in kWh and electricity bill calculations.",
      "EMF and internal resistance: ε = V + Ir; I = ε/(R + r).",
      "Kirchhoff’s laws, ammeter and voltmeter connections, fuse, circuit breaker, earthing, house wiring, AC, and DC."
    ],
    visualize: "A drag-and-drop circuit builder with live current, voltage, and power readouts, plus an I-V graph."
  },
  {
    title: "Magnetic Effects of Current",
    summary: "Turn current into magnetism, motion, induction, generation, transformation, and efficient power transmission.",
    pointTitles: ["Magnetic Fields", "Field Sources", "Magnetic Force", "Moving Charges", "DC Motor", "Induction", "Generators", "Transformers", "Power Loss"],
    points: [
      "Magnetic fields and field lines; Oersted’s experiment and the right-hand grip rule.",
      "Magnetic field of a straight wire, a coil, and a solenoid.",
      "Electromagnets and the force on a conductor F = BIL sinθ.",
      "Force on a moving charge F = qvB and Fleming’s left-hand rule.",
      "The DC motor.",
      "Electromagnetic induction: EMF = −N(ΔΦ/Δt); Faraday’s law and Lenz’s law.",
      "Fleming’s right-hand rule; AC generator and dynamo.",
      "Transformer relation Vₛ/Vₚ = Nₛ/Nₚ = Iₚ/Iₛ; step-up, step-down, and efficiency.",
      "High-voltage power transmission reduces I²R energy loss."
    ],
    visualize: "Move a magnet through a coil with a galvanometer, animate a motor and generator, and adjust a transformer’s turns ratio."
  },
  {
    title: "Radioactivity and Electronics",
    summary: "Meet the atomic nucleus, follow radioactive decay, and build the electronic ideas behind modern devices.",
    pointTitles: ["Atomic Structure", "Radiation Types", "Decay Equations", "Half-Life", "Nuclear Energy", "Radioactive Uses", "Semiconductors", "Transistors", "Logic Gates", "X-Rays"],
    points: [
      "Atoms and nuclei: proton number Z, mass number A, and neutrons N = A − Z.",
      "Isotopes.",
      "Alpha, beta, and gamma radiation: nature, penetration, ionising power, and deflection in fields.",
      "Balancing decay equations by conserving mass number A and proton number Z.",
      "Half-life: N = N₀(½)^(t/T).",
      "Fission, fusion, mass defect, and E = Δm·c².",
      "Uses and hazards of radioactivity: medicine, power, and dating.",
      "Semiconductors, n-type and p-type material, p-n junctions, diodes, rectification, transistors, LEDs, and LDRs.",
      "Logic gates and truth tables: AND, OR, NOT, NAND, NOR, and XOR.",
      "X-rays and their uses."
    ],
    visualize: "Watch atoms decay randomly against a half-life curve, build logic gates, and explore a diode I-V curve."
  }
];

const chapterButtons = [...document.querySelectorAll('.simulation-option')];
const chaptersView = document.querySelector('#chapters-view');
const chapterPage = document.querySelector('#chapter-page');
const pointPage = document.querySelector('#point-page');
const chapterLabel = document.querySelector('#chapter-label');
const chapterTitle = document.querySelector('#chapter-title');
const chapterSummary = document.querySelector('#chapter-summary');
const pointsCount = document.querySelector('#points-count');
const pointsList = document.querySelector('#points-list');
const visualizeText = document.querySelector('#visualize-text');
const backButton = document.querySelector('#back-button');
const pointBackButton = document.querySelector('#point-back-button');
const pointLabel = document.querySelector('#point-label');
const pointTitle = document.querySelector('#point-title');
const pointContext = document.querySelector('#point-context');
const pointDetail = document.querySelector('#point-detail');
const previousPoint = document.querySelector('#previous-point');
const nextPoint = document.querySelector('#next-point');
const chatSubtitle = document.querySelector('#chat-subtitle');
let activeView = chaptersView;
let transitionTimer;

function setSelectedChapter(index) {
  chapterButtons.forEach((button, buttonIndex) => {
    const isSelected = buttonIndex === index;
    button.classList.toggle('is-selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
}

function updateChapterPage(index) {
  const chapter = chapters[index];

  chapterLabel.textContent = `CHAPTER ${String(index + 1).padStart(2, '0')}`;
  chapterTitle.textContent = chapter.title;
  chapterSummary.textContent = chapter.summary;
  pointsCount.textContent = `${chapter.points.length} points`;
  visualizeText.textContent = chapter.visualize;
  pointsList.innerHTML = chapter.points
    .map(
      (point, pointIndex) => `
        <li class="point-item" style="--point-index: ${pointIndex}">
          <a class="point-link" href="#chapter/${index + 1}/point/${pointIndex + 1}">
            <span class="point-index">${String(pointIndex + 1).padStart(2, '0')}</span>
            <span class="point-name">${chapter.pointTitles[pointIndex]}</span>
            <span class="point-arrow" aria-hidden="true">↗</span>
          </a>
        </li>`
    )
    .join('');

  if (chatSubtitle) {
    chatSubtitle.textContent = `${chapter.title} · study assistant`;
  }
  document.title = `${chapter.title} · Physics Visualizer`;
}

function updatePointPage(chapterIndex, pointIndex) {
  const chapter = chapters[chapterIndex];
  const title = chapter.pointTitles[pointIndex];
  const previousIndex = pointIndex - 1;
  const nextIndex = pointIndex + 1;

  pointLabel.textContent = `CHAPTER ${String(chapterIndex + 1).padStart(2, '0')} · POINT ${String(pointIndex + 1).padStart(2, '0')}`;
  pointTitle.textContent = title;
  pointContext.textContent = `From ${chapter.title}`;
  pointDetail.textContent = chapter.points[pointIndex];
  pointBackButton.dataset.chapter = String(chapterIndex + 1);

  previousPoint.hidden = previousIndex < 0;
  previousPoint.href = `#chapter/${chapterIndex + 1}/point/${previousIndex + 1}`;
  previousPoint.querySelector('strong').textContent = previousIndex >= 0 ? chapter.pointTitles[previousIndex] : '';

  nextPoint.hidden = nextIndex >= chapter.points.length;
  nextPoint.href = `#chapter/${chapterIndex + 1}/point/${nextIndex + 1}`;
  nextPoint.querySelector('strong').textContent = nextIndex < chapter.points.length ? chapter.pointTitles[nextIndex] : '';

  if (chatSubtitle) {
    chatSubtitle.textContent = `${title} · ${chapter.title}`;
  }
  document.title = `${title} · Physics Visualizer`;
}

function replayView(view) {
  view.classList.remove('is-entering');
  window.requestAnimationFrame(() => view.classList.add('is-entering'));
}

function swapView(nextView) {
  if (nextView === activeView) {
    replayView(nextView);
    return;
  }

  window.clearTimeout(transitionTimer);
  const previousView = activeView;
  const hasPreviousView = !previousView.hidden;
  const delay = hasPreviousView ? 220 : 0;
  activeView = nextView;

  if (hasPreviousView) {
    previousView.classList.remove('is-entering');
    previousView.classList.add('is-leaving');
  }

  transitionTimer = window.setTimeout(() => {
    previousView.hidden = true;
    previousView.classList.remove('is-leaving');
    nextView.hidden = false;
    nextView.classList.remove('is-entering');
    window.requestAnimationFrame(() => nextView.classList.add('is-entering'));
  }, delay);
}

function showChapter(index) {
  updateChapterPage(index);
  setSelectedChapter(index);
  swapView(chapterPage);
}

function showPoint(chapterIndex, pointIndex) {
  updatePointPage(chapterIndex, pointIndex);
  setSelectedChapter(chapterIndex);
  swapView(pointPage);
}

function showHome() {
  if (chatSubtitle) {
    chatSubtitle.textContent = 'Physics study assistant';
  }
  document.title = 'Physics Visualizer';
  swapView(chaptersView);
}

function renderRoute() {
  const pointMatch = window.location.hash.match(/^#chapter\/(\d+)\/point\/(\d+)$/);
  const chapterMatch = window.location.hash.match(/^#chapter\/(\d+)$/);
  const chapterIndex = pointMatch ? Number(pointMatch[1]) - 1 : chapterMatch ? Number(chapterMatch[1]) - 1 : -1;
  const pointIndex = pointMatch ? Number(pointMatch[2]) - 1 : -1;

  if (
    chapterIndex >= 0 &&
    chapterIndex < chapters.length &&
    pointIndex >= 0 &&
    pointIndex < chapters[chapterIndex].points.length
  ) {
    showPoint(chapterIndex, pointIndex);
  } else if (chapterIndex >= 0 && chapterIndex < chapters.length) {
    showChapter(chapterIndex);
  } else {
    showHome();
  }
}

chapterButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    window.location.hash = `chapter/${index + 1}`;
  });
});

backButton.addEventListener('click', () => {
  window.location.hash = '';
});

pointBackButton.addEventListener('click', () => {
  window.location.hash = `chapter/${pointBackButton.dataset.chapter}`;
});

window.addEventListener('hashchange', renderRoute);
renderRoute();
