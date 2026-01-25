<template>
  <div class="home-page">
    <header class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          Find Your <span class="highlight">Dream</span> Space
        </h1>
        <p class="hero-subtitle">
          Experience the future of real estate. Premium properties for premium lives.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Explore Listings</button>
          <button class="btn btn-secondary">About Us</button>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%),
              radial-gradient(circle at bottom left, rgba(244, 114, 182, 0.1), transparent 40%);
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.highlight {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 4px 20px -5px rgba(99, 102, 241, 0.5);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255,255,255,0.05);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
}
</style>
