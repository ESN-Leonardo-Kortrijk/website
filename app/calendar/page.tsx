export default function Calendar() {
    return (

        <div className="h-screen w-4/5 max-w-[1920px] m-auto">
            <iframe
                src="https://embed.styledcalendar.com/#1NrTXvfk1jtXz09yIPtP"
                title="Styled Calendar"
                className="w-full min-h-[600px] styled-calendar-container"
                style={{ border: "none" }}
                data-cy="calendar-embed-iframe"
            ></iframe>
            <script
                async
                type="module"
                src="https://embed.styledcalendar.com/assets/parent-window.js"
            ></script>
        </div>
    );
}