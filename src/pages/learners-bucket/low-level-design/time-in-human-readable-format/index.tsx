/**
 * https://alpha.learnersbucket.com/s/courses/658bee23e4b0174a3cb6c294/take
 */

type Props = {
  time: Date;
};
export const FormattedTime = ({ time }: Props) => {
  const currTimeInMs = new Date().getTime();
  const pastTimeInMs = time.getTime();
  const timeDiffInMs = currTimeInMs - pastTimeInMs;

  if (timeDiffInMs < 0) return <>Invalid Time</>;

  const timeDiffInSec = Math.abs(timeDiffInMs) / 1000;
  const timeInSeconds = {
    MINUTE: 60,
    HOUR: 60 * 60,
    DAY: 60 * 60 * 24,
    MONTH: 60 * 60 * 24 * 30,
    YEAR: 60 * 60 * 24 * 365,
  };
  const messages = {
    NOW: 'just now',
    LESS_THAN_A_MINUTE: 'a few seconds ago',
    MINUTE: 'minute ago',
    MINUTES: 'minutes ago',
    HOUR: 'hour ago',
    HOURS: 'hours ago',
    DAY: 'day ago',
    DAYS: 'days ago',
    MONTH: 'month ago',
    MONTHS: 'months ago',
    YEAR: 'year ago',
    YEARS: 'years ago',
  };
  let finalMessage = '';
  if (timeDiffInSec < 10) finalMessage = messages.NOW;
  else if (timeDiffInSec < timeInSeconds.MINUTE) finalMessage = messages.LESS_THAN_A_MINUTE;
  else if (timeDiffInSec < timeInSeconds.HOUR) {
    const minutes = Math.floor(timeDiffInSec / timeInSeconds.MINUTE);
    finalMessage = minutes === 1 ? messages.MINUTE : `${minutes} ${messages.MINUTES}`;
  } else if (timeDiffInSec < timeInSeconds.DAY) {
    const hours = Math.floor(timeDiffInSec / timeInSeconds.HOUR);
    finalMessage = hours === 1 ? messages.HOUR : `${hours} ${messages.HOURS}`;
  } else if (timeDiffInSec < timeInSeconds.MONTH) {
    const days = Math.floor(timeDiffInSec / timeInSeconds.DAY);
    finalMessage = days === 1 ? messages.DAY : `${days} ${messages.DAYS}`;
  } else if (timeDiffInSec < timeInSeconds.YEAR) {
    const months = Math.floor(timeDiffInSec / timeInSeconds.MONTH);
    finalMessage = months === 1 ? messages.MONTH : `${months} ${messages.MONTHS}`;
  } else {
    const years = Math.floor(timeDiffInSec / timeInSeconds.YEAR);
    finalMessage = years === 1 ? messages.YEAR : `${years} ${messages.YEARS}`;
  }

  return <>{finalMessage}</>;
};
