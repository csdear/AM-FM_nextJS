import styles from "./youtube.module.scss"

// INS Like : <Youtube id="owVWdi39aQ-A" />

export default function YouTube({ id }: { id: string }) {
  return (
    <div className={styles["youtube"]}>
    <div className={styles["youtube__container"]}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className={styles["youtube__frame"]}
      />
    </div>
    </div>
  );
}


//  Alternate style, trailing export FC w/ interface. ref code_heap DOUBLETUBE
// import styles from "./youtube.module.scss"
// import { FC } from 'react';

// interface Props {
//     id: string;
//   }

// const YouTube: FC<Props> = ({ id }) => {
//   return (
//     <div className={styles["youtube"]}>
//     <div className={styles["youtube__container"]}>
//       <iframe
//         src={`https://www.youtube.com/embed/${id}`}
//         allow="autoplay; encrypted-media"
//         title="Embedded YouTube video"
//         className={styles["youtube__frame"]}
//       />
//     </div>
//     </div>
//   );
// };

// export default YouTube;