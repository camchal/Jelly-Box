// import { EventBus } from './EventBus';

// class SimulationEngine {
//   private accumulator: number = 0;
//   private lastTimestamp: number = 0;
//   private isRunning: boolean = false;
//   private animationFrameId: number | null = null;

//   private timeStep: number = 1 / 60; // 60 updates per second
//   private systems: any[] = [];
//   private eventBus: EventBus;

//   constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
//     // Initialize systems and event bus
//     this.eventBus = new EventBus();
//     this.systems.push(new ParticleSystem(this.eventBus));
//     this.systems.push(new CollisionSystem(this.eventBus));
//     this.systems.push(new RenderSystem(canvas, context, this.eventBus));
//   }

//   start() {
//     if (this.isRunning) return;
//     this.isRunning = true;
//     this.lastTimestamp = performance.now();
//     this.animationLoop(this.lastTimestamp);
//   }

//   stop() {
//     if (!this.isRunning) return;
//     this.isRunning = false;
//     if (this.animationFrameId !== null) {
//       cancelAnimationFrame(this.animationFrameId);
//       this.animationFrameId = null;
//     }
//   }

//   private animationLoop(timestamp: number) {
//     // Calculate delta time in seconds
//     const deltaTime = (timestamp - this.lastTimestamp) / 1000;
//     this.lastTimestamp = timestamp;

//     // Update with fixed timestep
//     this.update(deltaTime);

//     // Schedule next frame
//     this.animationFrameId = requestAnimationFrame(
//       this.animationLoop.bind(this)
//     );
//   }

//   private update(deltaTime: number) {
//     // Accumulate time
//     this.accumulator += deltaTime;

//     // Run physics updates at fixed intervals
//     while (this.accumulator >= this.timeStep) {
//       // Update all systems with fixed timestep
//       for (const system of this.systems) {
//         system.update(this.timeStep);
//       }
//       this.accumulator -= this.timeStep;
//     }

//     // Render at variable framerate (once per frame)
//     const renderSystem = this.systems.find(s => s instanceof RenderSystem);
//     if (renderSystem) {
//       renderSystem.render(deltaTime);
//     }
//   }

//   // Other methods: add/remove particles, configure, etc.
// }
