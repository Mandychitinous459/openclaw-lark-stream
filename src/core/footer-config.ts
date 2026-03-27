/**
 * Copyright (c) 2026 ByteDance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 *
 * Default values and resolution logic for the Feishu card footer configuration.
 *
 * Each boolean flag controls whether a particular metadata item is displayed
 * in the card footer (e.g. elapsed time, model name).
 */

import type { FeishuFooterConfig } from './types';

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

/**
 * The default footer configuration.
 *
 * Status, elapsed, tokens and context usage are on by default.
 * Cache details and model name are off by default.
 */
export const DEFAULT_FOOTER_CONFIG: Required<FeishuFooterConfig> = {
  status: true,
  elapsed: true,
  tokens: true,
  cache: false,
  context: true,
  model: false,
};

// ---------------------------------------------------------------------------
// Resolver
// ---------------------------------------------------------------------------

/**
 * Merge a partial footer configuration with `DEFAULT_FOOTER_CONFIG`.
 *
 * Fields present in the input take precedence; anything absent falls back
 * to the default value.
 */
export function resolveFooterConfig(cfg?: FeishuFooterConfig): Required<FeishuFooterConfig> {
  if (!cfg) return { ...DEFAULT_FOOTER_CONFIG };
  return {
    status: cfg.status ?? DEFAULT_FOOTER_CONFIG.status,
    elapsed: cfg.elapsed ?? DEFAULT_FOOTER_CONFIG.elapsed,
    tokens: cfg.tokens ?? DEFAULT_FOOTER_CONFIG.tokens,
    cache: cfg.cache ?? DEFAULT_FOOTER_CONFIG.cache,
    context: cfg.context ?? DEFAULT_FOOTER_CONFIG.context,
    model: cfg.model ?? DEFAULT_FOOTER_CONFIG.model,
  };
}
