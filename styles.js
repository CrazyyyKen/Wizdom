// Trigger fade-in and fade-out effect based on the viewport height
$(document).ready(function () {

    // Function to check if an element is in the viewport
    function is70PercentInViewport(element) {
        var rect = element.getBoundingClientRect();
        var viewportHeight = window.innerHeight;
        var elementHeight = rect.bottom - rect.top;

        // 50% threshold
        var threshold = 0.5;

        return rect.bottom >= viewportHeight * (1 - threshold) && rect.top <= viewportHeight * threshold;
    }

    // Function to handle the fade-in effect
    function handleFadeIn() {
        $(".fade-in-section").each(function () {
            if (is70PercentInViewport(this)) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    // Trigger the fade-in effect on initial load
    handleFadeIn();

    // Trigger the fade-in effect when the user scrolls
    $(window).on("scroll", function () {
        handleFadeIn();
    });

});

