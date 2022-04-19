const Icon = ({ color, size, clases, viewBox, ...props }) => (
      <svg
        className={clases ? clases : ""}
        viewBox={`${viewBox ? viewBox : "0 0 512 512"}`}
        height={size}
        width={size}
        fill={color}
        {...props}
      >
        {props.children}
      </svg>
);
  

export function Medal(props) {
    return (
      <Icon {...props} viewBox="0 0 511.664 511.664">
        <polygon
          style={{ fill: "#3789C9" }}
          points="151.304,221.152 39.544,431.712 141.032,422.352 190.152,511.648 301.912,301.104 "
        />
        <path
          style={{ fill: "#4B9FD8" }}
          d="M164.104,450.352c3.136-6.736-0.144-14.784-6.704-18.272l-6.432-3.424
                c-6.432-3.664-8.88-11.808-5.376-18.4c3.552-6.704,11.904-9.264,18.608-5.712l18.176,9.648c5.616,2.976,12.656,0.816,15.552-4.832
                l0.448-0.864c3.328-5.328,1.36-12.368-4.176-15.296l-54.368-28.864c-6.624-3.52-9.872-11.536-6.784-18.288
                c3.408-7.184,12.016-10.016,18.944-6.336l50.432,26.768c5.616,2.976,12.656,0.816,15.632-4.8l0.288-0.736l0.08-0.16
                c3.216-5.888,0.96-13.28-4.976-16.432l-28.288-15.008c-6.624-3.52-9.872-11.536-6.736-18.368
                c3.376-7.104,12.016-10.016,18.944-6.336l31.248,16.592c5.84,3.104,12.816,0.512,15.84-5.376c0.048-0.08,0.048-0.08,0.08-0.16
                c0.048-0.08,0.048-0.08,0.08-0.16c3.184-5.808,1.424-13.04-4.432-16.128l-33.712-17.888c-6.544-3.472-9.792-11.488-6.704-18.24
                c3.408-7.184,12.016-10.016,18.944-6.336l83.168,44.144l-111.76,210.56l-30.752-55.984
                C161.304,454.32,163.032,452.656,164.104,450.352z"
        />
        <polygon
          style={{ fill: "#4B9FD8" }}
          points="360.36,221.152 472.12,431.712 370.632,422.352 321.512,511.648 209.752,301.104 	"
        />
        <path
          style={{ fill: "#3789C9" }}
          d="M347.56,450.352c-3.136-6.736,0.144-14.784,6.704-18.272l6.432-3.424
            c6.432-3.664,8.88-11.808,5.376-18.4c-3.552-6.704-11.904-9.264-18.608-5.712l-18.176,9.648c-5.616,2.976-12.656,0.816-15.552-4.832
            l-0.448-0.864c-3.328-5.328-1.36-12.368,4.176-15.296l54.384-28.864c6.624-3.52,9.872-11.536,6.784-18.288
            c-3.408-7.184-12.016-10.016-18.944-6.336l-50.432,26.768c-5.616,2.976-12.656,0.816-15.632-4.8l-0.288-0.736l-0.08-0.16
            c-3.216-5.888-0.96-13.28,4.976-16.432l28.288-15.008c6.624-3.52,9.872-11.536,6.736-18.368
            c-3.376-7.104-12.016-10.016-18.944-6.336l-31.28,16.608c-5.84,3.104-12.816,0.512-15.84-5.376c-0.048-0.08-0.048-0.08-0.08-0.16
            s-0.048-0.08-0.08-0.16c-3.184-5.808-1.424-13.04,4.432-16.128l33.712-17.888c6.544-3.472,9.792-11.488,6.704-18.24
            c-3.408-7.184-12.016-10.016-18.944-6.336l-83.168,44.144l111.76,210.56l30.8-55.984C350.36,454.32,348.632,452.656,347.56,450.352z
            "
        />
        <path
          style={{ fill: "#FFDB70" }}
          d="M442.472,186.64c0,16.064-16.224,29.792-20.192,44.608c-4.096,15.328,2.976,35.312-4.8,48.736
            c-7.872,13.616-28.784,17.44-39.84,28.48c-11.056,11.056-14.864,31.952-28.48,39.84c-13.424,7.76-33.392,0.688-48.736,4.8
            c-14.816,3.968-28.544,20.192-44.608,20.192s-29.792-16.224-44.608-20.192c-15.328-4.096-35.312,2.976-48.736-4.8
            c-13.616-7.872-17.44-28.784-28.48-39.84c-11.056-11.056-31.952-14.864-39.84-28.48c-7.76-13.424-0.688-33.392-4.8-48.736
            c-3.968-14.816-20.192-28.544-20.192-44.608s16.224-29.792,20.192-44.608c4.096-15.328-2.976-35.312,4.8-48.736
            c7.872-13.616,28.784-17.44,39.84-28.48c11.056-11.056,14.864-31.952,28.48-39.84c13.424-7.76,33.392-0.688,48.736-4.8
            C226.04,16.224,239.768,0,255.832,0s29.792,16.224,44.608,20.192c15.328,4.096,35.312-2.976,48.736,4.8
            c13.616,7.872,17.44,28.784,28.48,39.84c11.056,11.056,31.952,14.864,39.84,28.48c7.76,13.424,0.688,33.392,4.8,48.736
            C426.248,156.848,442.472,170.576,442.472,186.64z"
        />
        <path
          style={{ fill: "#FFFFFF", opacity: "0.25" }}
          d="M280.376,166.096H166.872
            c-8.832,0-16.064-7.232-16.064-16.064l0.128-1.104v-0.24c-0.128-9.312,7.488-16.928,16.8-16.928h78.672
            c10.432,0,19.616-7.728,20.24-18.144c0.496-10.912-8.224-20.112-19.136-20.112h-83.328c-9.2,0-16.064-7.728-15.952-16.928
            c0-0.128,0-0.128,0-0.24s0-0.128,0-0.24c-0.128-9.2,6.752-16.928,15.952-16.928h87.2c10.304,0,19.504-7.728,20.112-18.032
            c0.496-11.04-8.224-20.112-19.136-20.112h-45.792c-14.56,1.952-31.968-3.04-44.08,3.968c-13.616,7.872-17.424,28.784-28.48,39.84
            s-31.952,14.864-39.84,28.48c-7.76,13.424-0.704,33.392-4.8,48.736c-3.968,14.816-20.192,28.544-20.192,44.608
            s16.224,29.792,20.192,44.608c4.096,15.328-2.976,35.312,4.8,48.736c7.872,13.616,28.784,17.44,39.84,28.48
            c11.056,11.056,14.864,31.952,28.48,39.84c12.112,7.008,29.52,2.016,44.08,3.968h63.024c10.304,0,19.504-7.728,20.112-18.032
            c0.496-11.04-8.224-20.112-19.136-20.112l-92.24-0.016c-10.88,0-19.632-9.104-19.056-20.112c0.544-10.32,9.808-18.064,20.144-18.064
            h35.76c10.288-0.304,18.576-8.72,18.576-19.072c0-10.544-8.592-19.136-19.136-19.136h-54.208c-8.832,0-16.064-7.232-15.936-16.064
            v-1.376c-0.608-8.704,6.384-16.064,15.088-16.064h119.712c10.416,0,19.616-7.728,20.24-18.032
            C299.992,175.168,291.288,166.096,280.376,166.096z"
        />
        <path
          style={{ fill: "#EC9922" }}
          d="M255.832,319.936c-73.504,0-133.296-59.808-133.296-133.296S182.328,53.344,255.832,53.344
            s133.296,59.808,133.296,133.296S329.336,319.936,255.832,319.936z"
        />
        <path
          style={{ fill: "#E18B26" }}
          d="M389.128,186.64c0-70.912-55.712-128.912-125.648-132.912h-12.416c-8.192,0-15.504,6.144-16,14.336
            c-0.384,8.768,6.528,16,15.216,16l73.344,0.016c8.656,0,15.616,7.232,15.152,16c-0.432,8.208-7.792,14.368-16.016,14.368h-28.432
            c-8.176,0.24-14.784,6.928-14.784,15.168c0,8.384,6.832,15.216,15.216,15.216h43.104c7.024,0,12.768,5.76,12.672,12.768v1.072
            c0.48,6.928-5.072,12.768-12,12.768h-95.184c-8.288,0-15.6,6.144-16.096,14.336c-0.384,8.768,6.528,16,15.216,16h90.24
            c7.024,0,12.768,5.76,12.768,12.768l-0.096,0.88v0.192c0.096,7.408-5.952,13.456-13.36,13.456h-62.56
            c-8.288,0-15.6,6.144-16.096,14.432c-0.384,8.672,6.528,16,15.216,16h66.256c7.312,0,12.768,6.144,12.672,13.456
            c0,0.096,0,0.096,0,0.192s0,0.096,0,0.192c0.096,7.312-5.36,13.456-12.672,13.456h-69.328c-8.192,0-15.504,6.144-16,14.336
            c-0.384,8.784,6.528,16,15.216,16h18.288C343.544,304.512,389.128,250.8,389.128,186.64z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M343.688,158.768h-61.2l-18.912-58.208c-2.432-7.488-13.024-7.488-15.456,0l-18.912,58.208h-61.216
            c-7.872,0-11.136,10.064-4.768,14.688l49.52,35.984l-18.912,58.208c-2.432,7.488,6.128,13.712,12.496,9.088l49.504-35.968
            l49.52,35.984c6.368,4.624,14.928-1.6,12.496-9.088l-18.912-58.208l49.52-35.984C354.824,168.848,351.544,158.768,343.688,158.768z"
        />
      </Icon>
    );
  }