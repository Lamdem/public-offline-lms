/**
 * Offline Mode Pre-Bootstrap Configuration
 *
 * This script runs BEFORE Angular bootstraps to capture offline configuration
 * from URL parameters and store them in localStorage.
 *
 * Only included in offline builds (index.offline.html).
 */
(function() {
  'use strict';

  // Check if this is the init-app route or has offline config params
  const params = new URLSearchParams(window.location.search);

  if (params.has('lan') || params.has('tenant') || params.has('school')) {
    console.log('[Pre-Bootstrap] Offline init detected');

    // Extract configuration from query parameters
    const lanServer = params.get('lan');
    const tenantId = params.get('tenant');
    const schoolUid = params.get('school');
    const streamServer = params.get('stream');

    // Store LAN server configuration
    if (lanServer) {
      localStorage.setItem('_offline-local-server', lanServer);
      console.log('[Pre-Bootstrap] Local server configured:', lanServer);
    }

    // Store school UID
    if (schoolUid) {
      localStorage.setItem('_offline-school', schoolUid);
      console.log('[Pre-Bootstrap] School configured:', schoolUid);
    }

    // Store tenant ID
    if (tenantId) {
      // This is intentionaly named 'tenant'
      localStorage.setItem('tenant', tenantId);
      console.log('[Pre-Bootstrap] Tenant configured:', tenantId);
    }

    // Store stream server configuration
    if (streamServer) {
      localStorage.setItem('_offline-stream-server', streamServer);
      console.log('[Pre-Bootstrap] Stream server configured:', streamServer);
    }

    window.location.href = '/';
  }
})();
