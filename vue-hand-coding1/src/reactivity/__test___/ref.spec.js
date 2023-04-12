import { effect } from '../effect'
import { ref } from '../ref'

describe('ref测试', () => {
    it('ref 基本使用', () => {
        const r = ref(0)
        let val
        effect(() => {
            val = r.value
        })
        expect(val).toBe(0)
        r.value++
        expect(val).toBe(1)
    })
    it('should make nested properties reactive', () => {
        const a = ref({
          count: 1
        })
        let dummy
        effect(() => {
          dummy = a.value.count
        })
        expect(dummy).toBe(1)
        a.value.count = 2
        expect(dummy).toBe(2)
      })
})