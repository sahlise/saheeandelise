export const convertUtcToChicago = (utcDateString: string): string => {
    
    if (!utcDateString.endsWith('Z')) {
        utcDateString += 'Z';
    }
    
    const date = new Date(utcDateString);
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'America/Chicago',
      hour12: true
    }).format(date);
  }

  export const convertUtcStringToDate = (utcDateString: string): Date => {
    
    if (!utcDateString.endsWith('Z')) {
        utcDateString += 'Z';
    }
    
    return new Date(utcDateString);
  }