{
    const steps = start => jump => {
        let offsets = [...start];
        let [pointer, i] = [0, 0];
        while (++i) {
            let o = offsets[pointer];
            offsets[pointer] += jump(o);
            pointer += o;
            if (pointer < 0 || pointer >= offsets.length) return i;
        }
    };

    const offsets = document.body.textContent.trim().split('\n').map(Number);

    console.log([() => 1, d => (d >= 3 ? -1 : 1)].map(steps(offsets)));
}