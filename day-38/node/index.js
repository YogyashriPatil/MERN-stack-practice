let currentClock;

function searchBackend(){
    console.log("req sent to backend")
}

function debouncedSearchBackend(){
    clearTimeout(currentClock)
    currentClock = setTimeout(searchBackend, 30); // start a clock
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();