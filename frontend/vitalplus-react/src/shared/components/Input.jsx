// Creacion de componente input
import '../../styles/global.css';

export default function Input({label, type = "text", ...props}){
    return (
      <div className="w-[240px]">
        {/* Label */}
        {label && (
          <label
            className="
                block
                text-[8px]
                mb-1
                text--color-base-600
                "
          >
            {label}
          </label>
        )}

        {/* El contenedor del input */}
        <div
          className="
          relative
          h-12
          flex
          items-center
        "
        >
          {/* Area interactiva invisible(48px) */}

          <div
            className="
            absolute
            inset-0
            "
          onMouseDown = {(e) =>{
            e.preventDefault();
            e.currentTarget.nextSibling.focus();
            }}
          
          />

          {/* Input visual */}
          <input
            type={type}
            className="
            relative
            w-full
            h-8
            rounded-md
            border
            border--color-border
            px-4
            text-sm
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-[var(--color-border)]
            focus:border-[var(--color-border-strong)]
            "
            {...props}
          />
        </div>
      </div>
    );
}

// border-[var(--color-border)]
// focus:border-[var(--color-border-strong)]