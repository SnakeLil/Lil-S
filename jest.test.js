test('test common matcher',()=>{
    expect(1).toBe(1)
    expect(1).not.toBe(3)
    expect(1).toBeGreaterThan(0)
    expect(1).toBeLessThan(2)
})