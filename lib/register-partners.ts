// Registers the wilson-motocaddy partner config into the partners map
// This file is imported by the page.tsx to extend the partners object at build time

import { partners } from './presentation-data'
import { wilsonMotocaddyConfig } from './wilson-motocaddy-config'

// Register the combined partner
partners['wilson-motocaddy'] = wilsonMotocaddyConfig
