import React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => (
	<Global
		styles={`

      /* Copied from https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap */

      /* devanagari */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2) format('woff2');
        unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }




      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Raleway&display=swap */

      /* cyrillic-ext */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* greek-ext */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');
        unicode-range: U+1F00-1FFF;
      }
      /* greek */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');
        unicode-range: U+0370-03FF;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCFPrEHJA.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCMPrEHJA.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCHPrEHJA.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrEHJA.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v19/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
	/>
);