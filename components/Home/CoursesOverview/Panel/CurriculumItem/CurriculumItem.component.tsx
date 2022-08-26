//Types
import { ReactElement } from 'react';
import { CurriculumItemProps } from '@app-types/interface';

export default function CurriculumItem({
  children,
  icon: Icon,
  color,
}: CurriculumItemProps): ReactElement {
  return (
    <div className="flex flex-row items-center gap-1 overflow-hidden">
      <Icon className={`${color}`} />
      <p className="font-montserrat text-xs text-secondary text-ellipsis overflow-hidden whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
