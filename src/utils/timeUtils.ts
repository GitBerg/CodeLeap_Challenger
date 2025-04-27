import { formatDistanceToNow } from 'date-fns';

export function getTimeSincePost(dateString: string) {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  }