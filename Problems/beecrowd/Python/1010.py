total_a_pagar = 0
for _ in range(2):
    valores = input().split()
    codpec = int(valores[0])
    numpec = int(valores[1])
    valpec = float(valores[2])
    total_a_pagar += numpec * valpec
print('VALOR A PAGAR: R$ %.2f' % total_a_pagar)