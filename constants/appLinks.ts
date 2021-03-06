type SegmentData = {
  action: string
}

/**
 * Represent a general link use on the site
 */
interface GeneralLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  /** Includes an object with the information of the action. Example:
   * ```ts
   * {
      action: 'Qiskit Community: GitHub'
     }
    ```
   */
  segment?: SegmentData
  /** Text shown when leaving the cursor on the link */
  title?: string,
}

const ACCESS_IBM_Q_SYSTEMS: GeneralLink = {
  url: 'https://qiskit.org/documentation/install.html#access-ibm-q-systems',
  label: 'Follow these steps',
  title: 'Link',
  segment: {
    action: 'Link to Access IBMQ Systems'
  }
}

const EVENT_REQUEST_LINK: GeneralLink = {
  url: 'https://airtable.com/shrRP0Td8TN4ttlFx',
  label: 'Request an event'
}

const YOUTUBE_ALL_EPISODES_CTA: GeneralLink = {
  url: 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY',
  label: 'View all episodes'
}

const seminarSeriesPlaylistUrl = 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2'

const SEMINAR_SERIES_ALL_EPISODES_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: 'Go to YouTube playlist',
  segment: {
    action: 'seminar-series > header > youtube-playlist'
  }
}

const SEMINAR_SERIES_FULL_ARCHIVE_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: 'Explore Full Seminar Archive',
  segment: {
    action: 'seminar-series > past-events-section > youtube-playlist'
  }
}

const DISCOVER_TEXTBOOK_CTA: GeneralLink = {
  url: 'https://qiskit.org/textbook',
  label: 'Discover more'
}

const REQUEST_AN_EVENT_CTA: GeneralLink = {
  url: 'mailto:hello@qiskit.camp',
  label: 'Request an event'
}

const IBM_Q_EXPERIENCE: GeneralLink = {
  url: 'https://quantum-computing.ibm.com/lab',
  label: 'IBM Quantum Lab'
}

export {
  GeneralLink,
  SegmentData,
  ACCESS_IBM_Q_SYSTEMS,
  EVENT_REQUEST_LINK,
  YOUTUBE_ALL_EPISODES_CTA,
  DISCOVER_TEXTBOOK_CTA,
  REQUEST_AN_EVENT_CTA,
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA,
  IBM_Q_EXPERIENCE
}
