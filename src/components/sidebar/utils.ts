export function getHeadingStyleClasses(headingType: 'h1' | 'h2' | 'h3', isClickable: boolean) {
  let finalClasses = '';

  if (headingType === 'h1') finalClasses = 'text-base font-semibold text-sky-600';
  else if (headingType === 'h2') finalClasses = 'text-sm text-pink-700 mt-2';
  else if (headingType === 'h3') finalClasses = 'text-sm pl-4 text-slate-700 list-disc';
  else finalClasses = '';

  if (isClickable) finalClasses += ' hover:text-slate-900 hover:border-l';

  return finalClasses;
}
