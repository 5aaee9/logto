import { sql } from 'slonik';

import type { AlterationScript } from '../lib/types/alteration.js';

const alteration: AlterationScript = {
  up: async (pool) => {
    await pool.query(sql`
      alter table connectors add storage jsonb not null default '{}'::jsonb;
    `);
  },
  down: async (pool) => {
    await pool.query(sql`
      alter table connectors drop storage;
    `);
  },
};

export default alteration;