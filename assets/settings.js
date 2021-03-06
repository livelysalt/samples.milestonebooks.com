const UNIT        =  40;
const DPI_DEFAULT =  80;
const DPI_ZOOM    = 120;

export default {
  UNIT,
  DPI_DEFAULT,
  DPI_ZOOM,
  ZOOM_RATIO: DPI_ZOOM / DPI_DEFAULT, // => $zoom-ratio
  TRANSITION_TIME_MS: 250,            // => $transition-time-ms
  TRANSITION_TIME_CONTEXT_MS: 400,    // => $transition-time-context-ms
  RULER_WIDTH_NOMINAL: 32,            // => $ruler-width-nominal (action width is 1 pixel less to make a single-pixel center line)
  CONTEXT_BTN_WIDTH: UNIT,            // => 4em
  SERIES_BTN_WIDTH: 2 * UNIT,         // => 8em
  SHEET_MUSIC_WIDTH: 650,             // => $sheet-music-width
  CONTROLS_HEIGHT: 40,                // => $controls-height
}
