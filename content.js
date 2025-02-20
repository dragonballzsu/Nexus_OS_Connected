// Use the selector from your original code. Note that special characters are escaped.
const targetSelector = 'div.absolute.top-1\\/2.transform.-translate-y-1\\/2.transition-transform.duration-300.ease-in-out.w-12.h-12.rounded-full.bg-\\[\\#79747E\\].flex.items-center.justify-center.overflow-hidden.translate-x-1';

let buttonClicked = false;

function checkAndClick() {
  const button = document.querySelector(targetSelector);
  if (button) {
    if (!buttonClicked) {
      button.click();
      console.log("Button clicked!");
      buttonClicked = true;
    }
  } else {
    if (buttonClicked) {
      console.log("Button not found, waiting for it to reappear...");
    }
    buttonClicked = false;
  }
}

// Create a MutationObserver to monitor DOM changes
const observer = new MutationObserver(() => {
  checkAndClick();
});

// Start observing the whole document for changes
if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
}

// Also check immediately on load
checkAndClick();
