
import React from 'react'
import { Trans } from 'react-i18next'
import { ShopOutlined, SendOutlined } from '@ant-design/icons'

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper jzih1dpqqrg-editor_css' },
  page: { className: 'home-page lgdcsuk5yj6-editor_css' },
  logo: {
    className: 'header3-logo jzjgnya1gmn-editor_css',
    children:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAAA8CAYAAAAt19zXAAAACXBIWXMAAAsSAAALEgHS3X78AAAcvElEQVR42u2deZwU1bXHv1Xds2/N1AwDSIO7YhRwwSUioq0sitpxIcanUWN8zyWYbl/cEo1oNBoTqfIZo8YlSoJGnpp2i2hs3HDBHZWnoiDY7FDMMMzWa70/qgZ6qqtneqarm9HU7/OZz2fqVvWturfu+dU55557rqBpGg56whsKjwHqgBQgApsift9yp2d2DtRAcASwFHClFZ8hKfILTu98d+B2usASjwDj046fAvxOt+w0uACPqazS6ZbvFkSnCywRNR3HnS7ZqUgBSVNZzOkWh4z+HRBzBr4DBw4ZOXDgwCEjBw4cOHDIyIEDBw4ZOXDgwIFDRg4cOHDgkJEDBw4cMnLgwIEDh4wcOHAwuOAsB3HQL6iB4F7A/sBooAEoBbqAzcBK4FNJkVd8S9vWCIwF9gKGAeXokd+twDfAF8BHkiKnnJFQRDLyhsKVwA+B44C9gXrjxawEFgPPRvy+xcV4SG8o3ADsCQwHhhjFW4B1wFcRv0/tZYAJwAggLinyxsHQ6d5QeDwwCTgI2B1oNAZ+HGgBIsAnwCIgHPH7tF7qqjMIQQMEoDPi97XlIHj/CUxO+90qSZGvyXLtHsCP0dfnjc2h7o+AZ4G/SYr8xSAnoCHA2UbbjgAq+vjJN2og+AIwT1LkV7PUOQM4K61v10iKfEWWa28yxkD3tR2SIv+0gO293ZCj7vtFJEW+atCSkTcU/i/gBqDJ4vRewPHAtd5Q+F/ATRG/77UCCOwBwGkGGR7UyyDp8IbCHwAvxgVh3vpTjtW/yj/9ybhNNZ6fi+ADdgGSaiC4DAgBt0mKvG0nkND5wMXAhD4unQCcavy/yhsKzwXuyEK6jwLHpg2ue4Gf5/A4pwJT047bgGtMA9cD3ARc2s+mjjf+rlUDwYeA2ZIirxpkJOQGrjX6ytOPn44CLgQuVAPBfwHXSYps/ihPAn6UdpwArshSn2a6FjUQXCgp8iMFaPMhwOWmYmXQ+oy8ofBjwD1ZiMiM44FXvaHwX4wvtB0CO9MbCi8APgauB47s42tVCUwEbhRhuXvBW/f/6fd3/I547KPGrs7zk4I4Cn3Vd6lhXlwLLFMDwROKSELneEPhj4AHcyAiM0YD1wHLvaHwbIvzElBmaFZl/RCstabj5aaBewGwbABEZMZ5Rn9fP4iI6CzD5Lq+n0RkNf7fVgPBO0zlm03HX2WrQFLk6wwNPx03F6jpt5iOtwD/PSjJyBsKPwHMHOCAW+oNhQ/NQ2C93lD4OeAx0xc7dzVP02iMdV0Q3H/ClT85ajodLhdD27aiCQImO2cY8JwaCO5XBCJ6BJgLjMuzqjrgem8o/I43FB6WVm7W8NoHWL8rTVjnAPcb5qMVlgH/MrSyecAC4LNe6i4FZquBYFgNBMt2MhHNMZ55995MMeAVYyz+FXgO+NDwjVnhMjUQXKwGglVp7e0PbjId76oGgifZ3O49DCsjHXMGk//LnSY0p6aZBj0eGHjG+JLWGF/2mcAxput2ARZ7Q+GmiN+3sZ8COxV4HKjOpzEaUJZMUkuMv+yxH2/UDyX01kuM2bIJtdaDpmkIPX8yDziwQCRUA7zaS/1tQBh42/hydn9NPcCuxu+OBUZamHBLvKHwwRG/b/UABn42dBmD9tdA0OL8IuBvwEuSIi/PMuB3QzeL/8PwR5lxLPCBGghOkBS5YycQ0VzgnCynvwAeAv4JfCIpsmbx+0bgKOBM4AzT6UOBd4H9jLr6g/uA2w3tthuzDbmzC1dbiMudg8l0TvcZ/cF0rgU4JuL3fWQqfx+4xxsKnwjcAeyRdu4a43f9EdofoSczswVJQaAilWR0i8qyWg8Tjj2Zl197ngkb17K51gM9M1uOVwPBsZIif2wzEVUYA3Mfi9OrjL5+tDfHu1GP2/hAXA4clnZqKPAOumP+/wwByRdfqoHgiYav0KwF/UJS5D4FQ1Lkrw2N6n41EJxqmAVmMt4PeMsGTbG/RHR3FiJqAa6WFPneHNq3CXgSeFINBMcZ5tSJaZeMMRzEH/bn2SRFjquB4J9M/pyD1EDwQEmRP7Sh7VWG9ZKOhyRFbh1MZCQag34ssJv5K2ZBRNsR8fueMwZWd+rPyyN+360Rvy/WD6GdaicRpVN+UhDYdVsL7S43kydN5/P6RhraWkmJGW6ySQXo11ezENE9wF4Rv++PfRGR0ceJiN83P+L3HQ4ETKeHe0PhUC+mVH9xNPoMWDrmAmNyISILAXtBUuSDsHaQjlUDwSeLSESXABdZnFoI7JMLEVm0b4mkyDOAX5hOXQ78cQCPeZtF2WybuuAiMier/odBhm7JPMJU/mzE7/swB2GJRfy+acD0iN8n91N72MXwNRQMCUFk1/ZWOkpKOeWI42grK6e+s4OU0MNY89h5T28ofBfWTupLI37fxRG/b0BZIyN+3x3A4YZ5141TspjWA8EI0/HtkiKfm69PQVLkoIXAAvxADQTPKwIR7Q7cZXHqCUmRffmGe0iKfDt6CIzZv9ffejYYWlc6Tjbyf+cLs5P6G0mRPxqsZDTU4sveH0EZCKk8W4wGJgSR0du2sqy+kcvHHoYrFqVU6yFfG2wkoiOASyxOXRDx+/6Ub/1GXNcECp8Gd66kyL+wqzJDYG+1OHW/GghWF7gtf7coe0tS5NNtbN984HwbqrrBoiyvGCDDET7cVPw7BiGyLQfxFPKm3lD4PHomvM+AgJ74uDWeYE1nF6vbOljd3smmaIxoKmV2RPeKlCDQuK2F+3bfl5dH7kZd+7bt2pEGL9rYtIctym6P+H0P2nWDiN/3OTClgK/nS0mRz7W7UiOg8l1TsctGU8RKEH0WWmq0EP0nKfJDwF/yrONj4D2ziZXnDOS1puMudL/eoCUjs3Yws8D3nZP1gQSBpKYR2dbO2rYOPKUlTB4qcdquI5gxsokxtdW0xRNEtm6jORbHJQh9EpMGVCYSIMBte+wHoouKVArg6QabgvG8ofB09IDQdKyI+H2/sLvzIn7fKxRuJuTiAr53K23kMjUQrCjQ/W60KLtEUuS2QtxMUuSfAFvzrMZMzqVZtO1cyPh76LN86bhXUuTYYCajN0zle3lD4WCBtKKz2LGkowfcosi6zi7WtXVw0qjhzJ90CIunHslC3+E8PvFgnjl6AounHslrx32f6w4cQ12Jm1UtrSQ1DVHonZKSgsDQ9jYWDBvJ20NHUN28qVWKdp5vY9OsImwvKOC7+7nJf2QHPpMUOVyoB5YU+Rv0uJ10lJA5TW6HVuQFvm8qXiUp8oMFlqkb8uyj54DVNplqv7Qo+z2DFKLxpV2KPoXbQ3sxpt3txn9lI6KVrW3Ulbh5bNIEnj56AmeMGs6w8p4aaqkocohUx41j9+G9aUdx1p6jWbu1ja5ksk9CKk8mQRS5d/ReXy2XmsZz9z1bbCJYicy4q08MDaYgMNar2a0dyUUYc7+xKCvEnnQ/sCj7QxHadzeZW131F2b/WpMaCP6gn2TsQV8fl45/Soq8ZlCTkQErc+IRbyh8m41a0RAsptLdosDKbW3sUlXBO9OOYubo4TnVN7yijHlHHsivDhzDxtZ24n34klKCgLetldCwka17yHO+trEffRZlfyrC+3vAxro04B+FfmBJkb9EXwScjiMKcKuJFu17tAjt6yL/WeI/kxntPbufdczK0WwdfGQU8fueAf7XyvzwhsJLvaHw8QUYIAjAlmiMMtHFa8cfyW5V/Xcf3DRuH84fsxvrWtsR+tCO0DQqksmD6p95dW8b+/EQi7LnCv3yjC237UrX8YmkyJuLNO7MwjpMDQR3tfkeY0zH70uKrBapfYvyJLS4xcdsrBoI9mddozku7f8sFvQOWs2IiN83Mwur7we86A2FH/OGwvlEzh6QUSIItLZ3okzYn92rB+7HfOCwcYyorUKN9u6b0wQBl6ZRlUzYGQG8h+n464jfFynSO3zHLjIq4rizinEZbaO/qJTMuKkPitg+O0yhAQdBqoHgTPSUPz2+2QxyiBZf2+m9+CJmAh95Q+G7DJOr35aauWBTV5QxjfVctOeovBoiAOfv4aW9owsxt3n/UTb2ozkKupg5fOxKzbFuJwurneEkdejrKNOxuojty3dGLVsQ5AmGY74v/Mp03Cwp8qMMcohZ1P/L0J2KK7P87hJgmTEz1t9B0oNAurqinDl6hC2NOWPUCErLS4mmtH4/S54wq3TFXPPTYlM9XUV8ZisHb6mN9ZdajO2Ondy+gcBqZu6aPrSig8hMgHcH3wKIvfgjnkLP8Dgb67QUDcA8byh8d643a06Vt7iFHdHPSU0Dl5sjGobY0phxnhr289TQEovn1fYBIGWhqBULmk31uIr4zCUFJsMoelbSQpFdUfoySxDkhWogWNnLz661KPt2k5FBSPGI33cDesrXe7JcdpGRh6hP+MpW7b0hWbv9OJZKUVteirey3LYGja6sIJpI5nJpu439uK2AJkexNLz6Ij5zUwE1vG4zyaydjihi++xc4jLbdOwGfpZFKxpKZkjDPEmRW/gWIKeE/BG/bz1wsTcUfgjdsWaenj/BGwr/OeL3/WfWSt496IUppaf6nu4YC2Lbds2o0uWiXLTvo1zhckEqp7WddsZbmP0t+xXxHXptqmfPIj7z/hZltqWlNVJyrDW0926MLWL7Gmxsy3NqILgGPV9YN67A2sFtFaicU9bIVbNmXY2eDqXCQqssFARDs/8SuLZfu4MYCzWP9obCV5EZmHWhNxS+L+L3mdcf0bFo5jOV7vopDWIniDE0BAQ03KJIazxBWyJhn4oST4CYkwX2mY2dag4Y3cUbCu8Z8fu+KsILPdimeg5RA0GxSJn/zGEia43obDvxmYmADlcDwcoiJXXb3+b6bqXnpFKDGgjONBbodmtFIpkpgt+WFPmzHIhoNnoK3p5M4XKRbG8ntW0brro6xIoKtKSJpwQBNI2EqoIg4G7QeTixaROIIiWNjaSiUZLNzaSiUdA0BLcbl8eDq6qqu75DgWMG5DeJ+H2/wzp1xY0WRPQTYAapMg4s2YRHbKdT0zmwVBTpiMZY3mbP+IinNL5s66CypE+ObQeW2DhY3rYoO6XgKlEoPJLMeJp8zL1JhX5mNRBsInOZxtsFuNWbFj4jP8WB3e/eKgjSTB7nkDmDeGMORCQAl1mdS7a3UzZ6NFWHHQYuF6nOTss6Uh0dVI4fT/X3vw+JBFo8TuWBB1I5dizxdetItrRQfcQRNM2axbDLL8dz4okIokh8/XoE93ZZHTFgJ27E7/sHmYFZU2qeXLTDKfTmSW6MJE4prZy93esZX7KBLalKhG6HVUrjlY32xKK9ubmZZVtbqSsp6evScH+SwOWA1ywGy6VFGPQ/trm+Yjyz1Rq+pwtwn6dyvLfdZDsRe8NGMBa2mieK9lMDwfTIdfMs22pJkZ/PoXoRffeSTJJpbcVdX8+wYJAhp5xCfO3anlaHIJDcsgV3fT3Dr7wSz9SpxFavRovFGH7FFdSfcQZoGt5bb6XpssuoPeYYao46iobzzmPkzTdTOmqUTkguF8C2fGeUbqbnbI4Yxb0jmFBznQZUAXRpLhC3MaNsOWjlCGhoQE1lOX9fuYbOZP5m6iOr1kIiRUnfrXrIzsES8fuiZC6l2M0bCp9W4LEfsLm+0w3NpVCCWmXxzEmsI//zFeBV6Pv7pWO8GggeX+B3UqhcQVY+ohuMfj2czMyi/VkQa/lhdksS2155hWRzM3VTp1IybBiptrYeZJRoaWHIGfo6Z/WRRxDcbgRRJNXZiVhVxa4PPEDpyJGsnzOHVZdeyspLLmHzww/jbmhgl1//GrGiglRHx3ZWzEcI16JvOLjDVMIlbR9lmmvGdl4CSFVydvmnSO4tbNEqEID60hLWt7Zx3cfL8npTG6Mx/rYigqeqgj7CjFRDq7MbVi//7kKNeG8ofD32pZxNRyEXkz5M5rT3PQX049yQ5RkKRbZ+CxPULnJdb/HBO97IdfRDC3K5N++blpSgJRJsnjdPt+OnTydu+IIAklu3UrbbblQfeijRVato/+CD7T6j+IYNlAwdiiAIrDj3XLYtXEgqGiXV0cGm+++n+fHHEaurqZk8Wfc3YU+sTc+YGs2V3EFM4t7pF0VT1TSVRLi44kPaEkMQSZHSNBprqrn9ky95ft2mAT/ED159l454nLq+/UUF2T3TSNP7iqm40diA0W4iGkvhkpKdbQiV3YJ6HvqmnGZcVyhyMMyUT03Fw9VA8K8F8oU9VmCty4pcX7Igo/skRc4/8DKVwt3URNsbb5Dq6MBz8sm4PR60zk4QRRKqiufkkwHY8ve/I5SU6A5tQKzQ44DXKwrJlhbK9twTsaICV20tZbvuSttbbwFQsc8+aMYmGWKeQjGSjKllIX3KvIdDLQFoqWquqn6dUSXr+CalE1Kl20VlWQkzXn6HZ9f0LyVxEo2TXn2XN9duYlRNtR5ImR3LIn7fAwUcLFb5kc7xhsJX20hEI+lnWuAB4B9qIDjJRkGdhnUWxJ9Litxc4LacmYVwZ9vYPg+6w7yggZWSIi9B350nHRMpYFpZobSUVEcHW554AsHtpvaYY4hv2IDW2UlpUxN1xx9PQlVpf+89SoYO3b77jqu2Fi2RILp8OSUjRuyYhdM0hPJyUjHdMnR5PAilpaBpO8jIGwq/5w2F+7uTpfmFtqEJn+4wzYSuniqURmeqmmq3ygN1z6GlymjVytG0FEMryigVRU56eTG/XPI5rfG+p/v/tX4TB/9zEc9+vQavp2Y7w/aCkwo5WCJ+30qsd+i8xRsK/9oGIjoEfcFnMYIqX1UDwXNsENQfA1aO1FckRS74DhWSIi/Non1drwaCsg3tOxB9ZnZ3ioO+SPQFSZHtW6RtaEet4TCkUgw5/XTEqipiq1dTO1Xfa3XL/PloiQTsmBlDKCkh2dqKFo+DyyKOsFtW3W4900Y3GXlD4afQ41V+6Q2Fr81RMM4kM5PhU9rp42NpfqKVGc9Aimi8geMqP+CW2gU0JxvpxE0qlaKpooz6ijJu+fBzDl6wiF8t+YLw+s2s7uiiLZGkORbnk5ZtPLgigv+195iycDFLmrcyekjtDr9Udpwb8fuWFXqkRPy+OVg7ZG/whsKPDnQbcG8ofCV6Dul0P9Fi4GWbHv1F9O230zFXDQTn5rg40yykjWogeH8WH81qYFqRhBdJkW9C3yTUjIAaCL5urOfqb/tENRD8pfFxSJ89+7SQvkJJkZ+l94Bd23MWuSoqSKgqzc8+i6umhspx40h1dTHE7yfV2Unb669T0tSUEWysRaNoqdR2080SaQqE2xsKPwmcnHb6N95Q+CjgWqsARm8oLKLvTnlzJtEI5jQFCzGFpwtAAhF3wsPVtc+zOVXB7W3HUe/aSA1RqlwuqofUsrqjk99+9Dm3lroZUVFOtdtFQtPY2BWjtSsKgkBTZQXlLrEv0wzgqojfN7dYgz/i9830hsIvkhncdybg84bCtwNzI37fuj4IqA49U0KAzKjuteh7nc0hM8vkQAf6BWogOByYnm5mAjPVQPBe9F1D3u9DSPcFzkZP7lVrcckG4DBbfBr9a9sZaiC4gMyt0ycC76uB4MPA/ZIiL+qjfaOMd3IJmXsNJtA31DyEwuYSNwdBduNzSZHfzKvmbllKIxAtlaKksZGtzz/PkJNPpm7qVASXC6GkhC3z55Nsa8PV2Ji58kHTeiciE9xYL1qcAkzxhsIvo8fQfG1cNw6Ygb79shl/WO0/9nNT2SNWnSag0amVU51K8QfPP6gRo8xunUaL2I5X3EpKE2koK0UoKyWuaWyLJ9gSiyMC5S6RXWqqEA1NKAci+lnE77uLIiPi900xiN68VqjRGEw3eEPhlwxfw5fs2N66Hj0/0mEGyVitIl4GTIr4fVFvKGxXtK/XENoTLIS2DD0w7jI1EFyKnkNpGdDt4PMYgnkomQngMWkNxxszQ0WHpMjT1EBwHpnpWAHOBc5VA8EvDI3zc3ZsVFGHnm/pIODILL7W9cA0SZFb+pkEbSC4G32zSDMZ/nbANYoiWjxOYvNm0DRcQ4boEdLG6gixpobYihW0vvIKtZMnU3HAAaTa22l96SXcFlqRmdByIqOI33eSNxS+D/ipxfljcvzqLoj4fRkBZZUT52/pWDTzNuDKjLaToi1VSbUmcn3tM+zv3sDPWmewKjECj2sLdUKUJAJuQaDGYoYsh6XqK9H3K1vITkLE7zvVGwr/BuuV1GXoa4FO7Ge1jwNnG7FNYN8eajGT0N5C5v7sAN8z/vqLucD5RVpu0hsh/YcaCC7pxcm7D9a7AfeG54AfS4rcnVM9VeA2JI21d+lktFVS5IHPEsbjkEzSeP75iJWVNIdCpNrbEcrKtms5riFDaHnqKWonT0ZwuWhZsID45s2U7767bo7lie6E/BcaavVAVOdHjYRslqicOP8qYLn1zVO0a2XEEg2cVvUOHzfcxUXVrxPT3KyKD2erVoZbSA5EqG4D9s2DiMzaSG0ehHSdYU7lm/LzG+C8iN93RhoRdWsl6aixacBfY5gcr+dZ1VLgtDx3p3WRGZ9UkUfbbkPft+/5PNu2ErhAUuQZaURkNV52sZOM1EDwEENDS0c+kwFCfONGKsePp276dGqOPpq6qVOJrVvXw+RyeTxEv/qKzqVLAWgNh3E3NPQkIk3bsf6srs6apNKsGVdt7faZNnea0PzRGwo/jR6Hc3YOAvgV8NuI35fLxnUT0ackR1iZbAlE4vFhNIqt3O15jJ9VvsfczgN4qmvfuJqqKCkXcvr4fw38DfhzxO9bbcMg2wU9OthFniv8I37fa8DhRjK6i7HIBd4L3kePGL83y9bYq9BncpLG+7QtY6PhP5mkBoInoIctTCO39BgJ9PiXv0qK/IgNj9IFfGi8C834iG7Is21L0DMnTkafiDmB3NOovG6MtQckRbb6Wn5pmKRJ41mX26wcWc0OKgP1EgFVYmUl8XXr0GIxhNJSoitW4KrOfNViXR2tCxcSXbmSRHMz7qFDe5poogiaRuybb0g0NyNaLM0SjKDJ2Jo1xCIRxLIyEASXYDUd7g2F642Bd4ShsjYavucN6KuhXzaSr+WMjkUzJcOHNCV7rwi40Ch3tULJhidua/7RrKu2Ths+0r1pMrCv4deoNjqwDT36+3PgnYjf94Zdb9obCpcagp0yBCCWhQgGWv++htYx1vAPSUClIXRbDGL9GFgU8fs+LsSzqoHgg/SMi1oiKfL4Pn5Tb4yJcQYBNhrmZhxQDRL/GFg8mLfEydK2GuBwo217om/5XmkQa7Mx1j4G3pEUecVOfM5hFh+cxyRFPnOgda6aNes9weU6OLF1K6XDhyOUlxP7+mvE2toMX5DgcpFsa0OLxXDV1W1ftZ8hy1F9kkkoK7M8v/0aUdweZyTkEJtjKzoWzTwLuMgQRiuWfgm4q3Li/KdwUMhB3W8ycjAo3tvt6M7rdBwgKfKneZDR94AFiOLI5NatkEzi8niyEg2ahqZp+gLXbEQTi+lkZBBNDtfcWHQySiOlPQzNoMkgobXAksqJ879xhpxDRg4s35kbPYNlur/sXUmRD8237lWzZpWjp5Apxb5Uxn36qox7rRx9551L3TurYysnzl9eAFvagYPvMi4g03FvS5Dj6Dvv7EIPfN1pEJ3368DBtwbmnEXrjIjs7wQcMnLg4Nthoh1H5kaXv/8utdEhIwcOvh0wL7ROkn3HHoeMHDhwUBCtqDsUJB33SIrc6ZCRAwcOiolbLMpu+K410iEjBw4Gt1bUROauJk9Iirzpu9ZWh4z+fWGO9fc4XfKt0Ypu+i421O28639bbKbnttxrnC4ZdFpRLXpuqfT39JakyB99F9v7/y4RI1y1SjuYAAAAAElFTkSuQmCC',
  },
  Menu: {
    className: 'header3-menu lgddglgr9c-editor_css',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        <Trans>header.home</Trans>
                      </p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '/home2',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>
                      <Trans>header.guide</Trans>
                    </p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item~lgddgsnc3i',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>
                    <Trans>header.about</Trans>
                  </p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
      // {
      //   name: 'item~lgde8ue4fu6',
      //   className: 'header3-item',
      //   children: {
      //     href: '#',
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <span>
      //                   <p>立即入驻</p>
      //                 </span>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //         name: 'text',
      //         className: 'lgde8w5ypc7-editor_css',
      //       },
      //     ],
      //   },
      //   subItem: null,
      // },
      // {
      //   name: 'item~lgej76fn7oj',
      //   className: 'header3-item',
      //   children: {
      //     href: '#',
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <span>
      //                 <span>
      //                   <span>
      //                     <p>登录</p>
      //                   </span>
      //                 </span>
      //               </span>
      //             </span>
      //           </span>
      //         ),
      //         name: 'text',
      //         className: 'lgde8w5ypc7-editor_css',
      //       },
      //     ],
      //   },
      //   subItem: null,
      // },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
}
export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <p>
                                  <b>
                                    <Trans>home.logoName</Trans>
                                  </b>
                                </p>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'banner5-title lgdeh0ahkqe-editor_css',
      },
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <p>
                <Trans>home.play</Trans>
              </p>
            </span>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'banner5-content',
        children: (
          <span>
            <span>
              <span>
                <p>
                  <Trans>home.connect</Trans>
                </p>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner5-button-wrapper lgdjmj8vpq-editor_css',
        children: {
          href: '#',
          className: 'banner5-button lgdjksj68zd-editor_css',
          type: 'primary',
          children: (
            <span>
              <p>
                <Trans>home.immediateEntry</Trans>
              </p>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    // children: './image/banner.png',
    // 'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ',
  },
}
export const Feature60DataSource = {
  wrapper: {
    className: 'home-page-wrapper feature6-wrapper lgekclfu4lt-editor_css',
  },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper lgekcai2t0s-editor_css',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        <Trans>home.logoName</Trans>
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: <Trans>home.hour1</Trans>,
              },
              toText: true,
              children: <Trans>home.hour</Trans>,
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <p>
                    <Trans>home.customerService</Trans>
                  </p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: <Trans>home.second1</Trans>,
              },
              toText: true,
              children: <Trans>home.second</Trans>,
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <Trans>home.inResponse</Trans>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: <Trans>home.numTimes1</Trans>,
              },
              toText: true,
              children: <Trans>home.numTimes</Trans>,
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <Trans>home.serviceSupport</Trans>
                  </span>
                </span>
              ),
            },
          },
        ],
      },
    ],
    autoplay: false,
  },
}
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <Trans>home.giveServiceTo</Trans>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <Trans>home.team</Trans>
          </span>
        ),
      },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: {
            className: 'content7-tag-name',
            children: (
              <span>
                <p>
                  <Trans>home.merchant</Trans>
                </p>
              </span>
            ),
          },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <h3>
                            <Trans>home.transnational</Trans>
                          </h3>
                          <p>
                            <Trans>home.highQuality</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.multilingualMenu</Trans>
                          </h3>
                          <p>
                            <Trans>home.helpTranslate</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.mobileOrdering</Trans>
                          </h3>
                          <p>
                            <Trans>home.efficiency</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.onlinePayment</Trans>
                          </h3>
                          <p>
                            <Trans>home.settlementSystem</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.finance</Trans>
                          </h3>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            // children:
            //   'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <span>
                <span>
                  <p>
                    <Trans>home.guest</Trans>
                  </p>
                </span>
              </span>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <h3>
                            <Trans>home.discount</Trans>
                          </h3>
                          <p>
                            <Trans>home.exclusive</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.find</Trans>
                          </h3>
                          <p>
                            <Trans>home.recommend</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.multilingualMenu</Trans>
                          </h3>
                          <p>
                            <Trans>home.dispense</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.onlinePayment</Trans>
                          </h3>
                          <p>
                            <Trans>home.needNot</Trans>
                          </p>
                          <br />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            // children:
            //   'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        <Trans>home.promotionIncentives</Trans>
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <h3>
                            <Trans>home.incentives</Trans>
                          </h3>
                          <p>
                            <Trans>home.subsidy</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.simple</Trans>
                          </h3>
                          <p>
                            <Trans>home.complex</Trans>
                          </p>
                          <br />
                          <h3>
                            <Trans>home.speciality</Trans>
                          </h3>
                          <Trans>home.have</Trans>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            // children:
            //   'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
    className: 'lgejopk0vv-editor_css',
  },
}
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <p>
              <Trans>home.logoName</Trans>
            </p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <span>
            <p>
              <Trans>home.connect</Trans>
            </p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: {
          href: '#',
          children: (
            <span>
              <p>
                <Trans>home.immediateEntry</Trans>
              </p>
            </span>
          ),
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: (
              <span>
                <span>
                  <p>
                    <ShopOutlined /> <Trans>home.business</Trans>
                  </p>
                </span>
              </span>
            ),
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    // children:
                    //   'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                    children:
                      require('@/assets/logo192.png'),
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              <Trans>home.accountRegistration</Trans>
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgekzxuo5mi-editor_css text-ellipsis',
                    children: (
                      <span>
                        <span>
                          <p>
                            <Trans>home.quickRegistration</Trans>
                          </p>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              <Trans>home.platform</Trans>
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel0hkk35a-editor_css text-ellipsis',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>
                                <Trans>home.qualifications</Trans>
                              </p>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              <Trans>home.productEntry</Trans>
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel15tgog-editor_css text-ellipsis',
                    children: (
                      <span>
                        <span>
                          <p>
                            <Trans>home.assist</Trans>
                          </p>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>
                                <Trans>home.opening</Trans>
                              </p>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel1sa8bal-editor_css text-ellipsis',
                    children: (
                      <span>
                        <p>
                          <Trans>home.opening1</Trans>
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'block1',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            children: (
              <span>
                <span>
                  <p>
                    <SendOutlined /> <Trans>home.promotion</Trans>
                  </p>
                </span>
              </span>
            ),
            className: 'feature8-carousel-title-block',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>
                          <Trans>home.accountRegistration</Trans>
                        </p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel3q8xgna-editor_css text-ellipsis',
                    children: (
                      <span>
                        <span>
                          <p>
                            <Trans>home.quickRegistration</Trans>
                          </p>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <span>
                          <span>
                            <p>
                              <Trans>home.promotionMaterials</Trans>
                            </p>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel2q6w33-editor_css text-ellipsis',
                    children: (
                      <span>
                        <p>
                          <Trans>home.obtain</Trans>
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>
                          <Trans>home.complete</Trans>
                        </p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel396ecrf-editor_css text-ellipsis',
                    children: (
                      <span>
                        <p>
                          <Trans>home.contactMerchant</Trans>
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>
                          <Trans>home.obtainMotivation</Trans>
                        </p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className:
                      'feature8-block-content lgel3fgsje-editor_css text-ellipsis',
                    children: (
                      <span>
                        <p>
                          <Trans>home.consumption</Trans>
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
}
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image lgejzl3j7ws-editor_css',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>新闻中心</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>行业新闻</p>
              </span>
            ),
          },
          post: {
            className: 'block-post lgekmvdj51m-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2023/4/12</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <p>商户端上线</p>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <span>
                <p>
                  经过近 3
                  年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI
                  资产、可视化以及产品体验相关的设计体系正在逐步成型。此次分享包含两部分，在介绍体系的同时，也会和大家分享我们在设计语言的部分探索。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <span>
                  <p>产品资讯</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post lgeknlm4147-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2023/3/10</p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>新产品上线</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      经过近 3
                      年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI
                      资产、可视化以及产品体验相关的设计体系正在逐步成型。此次分享包含两部分，在介绍体系的同时，也会和大家分享我们在设计语言的部分探索。
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block~lgekmmx4lf',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>产品资讯</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post lgekq7y3sll-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2023/3/09</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>新产品上线</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children: (
              <span>
                <p>
                  经过近 3
                  年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI
                  资产、可视化以及产品体验相关的设计体系正在逐步成型。此次分享包含两部分，在介绍体系的同时，也会和大家分享我们在设计语言的部分探索。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
}
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image lgdh5r36bit-editor_css',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>合作伙伴</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
}
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo',
      },
      {
        name: 'group',
        children: (
          <span>
            <p>Soladiscover</p>
          </span>
        ),
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: (
          <span>
            <p>Copyright © Soladiscover</p>
          </span>
        ),
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'zhihu',
        href: '#',
        className: 'links-zhihu lgek1dns0u-editor_css',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      },
    ],
  },
}
