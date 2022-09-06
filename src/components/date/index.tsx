import React, {FC} from  'react';
import { parseISO, format } from 'date-fns';
import { interpolateAs } from 'next/dist/shared/lib/router/router';

interface DateProps {
  dateString: string
}

const Date: FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date;