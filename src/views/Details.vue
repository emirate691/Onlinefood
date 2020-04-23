<template>
  <div>
    <b-row>
      <b-col cols="3">
        <nav
          id="navbar-example3"
          class="navbar navbar-light bg-light"
          positio="fixed"
        >
          <div data-spy="fixed" data-target="#navbar-example3" data-offset="0">
            <h2 class="heading">Food for your</h2>
            <span><marquee direction="rotate">Lunch meeting </marquee></span>
            <h4 class="heading-2">Catering to all office needs.</h4>
            <button class="btn btn-success" type="submit">Login form</button>
            <button class="btn btn-outline-success" type="submit" id="bnt">
              Sign up, it's free
            </button>
            <div class="buttom">
              <div>
                <i class="fal fa-envelope"></i
                ><a class="link" href="#">corporate.food@jumial.com.ng</a>
              </div>
              <div>
                <i class="fas fa-mobile-alt"></i>
                <a class="link" href="#">063 000 987 / 0907 980 7654</a>
              </div>
              <a class="link" href="#">Terms & Condition Privacy FAQ </a>
            </div>
          </div>
        </nav>
      </b-col>

      <b-col cols="1"></b-col>
      <b-col cols="7">
        <b-tabs card id="subnav">
          <b-tab
            no-body
            title="Lunch & OT Plan"
            :title-link-class="linkClass(0)"
            id="subnav-2"
          >
            <b-card-img
              bottom
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2eiXiiaSdlgqbktiNMmkYlvdK0T-W463-HWl1GkPtP4ZarlZt&usqp=CAU"
              alt="Image 21"
              style="height:150px"
            ></b-card-img>
            <b-card-text id="subnav-1"> </b-card-text>
          </b-tab>

          <b-tab
            no-body
            title="Office Meeting"
            :title-link-class="linkClass(1)"
          >
            <b-card-img
              bottom
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXFxcaFxgYGBcYFxcXGBcXGBsWGBcYHSggGBolGxcYITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtKy0tNS0tLS0tLS0tLy0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABHEAABAwIDBQUFBQUGBQQDAAABAgMRACEEEjEFBkFRYRMicYGRBzJCocEUI1Kx8GJygpLRFSSisuHxFjNTwtJDs9PiNFRz/8QAGQEAAgMBAAAAAAAAAAAAAAAAAgMAAQQF/8QALhEAAgICAgAEBAYCAwAAAAAAAAECEQMhEjEEIkFRE2Gh8BRScZGxwTLRI0KB/9oADAMBAAIRAxEAPwC4NN1LbRXqCKeCxVDSqe0vDhWAc6FBHkoViGMQMygLibGvojeptK8G+DFm1G/MCR86wLbiipwqUkJKkpJHCcoH0qvUv0ISBC0HqPlX1Vs/ZAUhK8+o5V8plXuHrX1lsZ0pYuQRFhxH+lWLemyI3h769KkLw/CajOYtCPfUBJ01PoL00rb7WaAFHS9vymgc0u2GoyfSKn7W9n5sC5zTC/5VAn5TWAKFfUG8qG8Vh3UJMlTahBsRIjQ+NfMCxz140cWn0Lkmnsk4e6T41pmysIpeC2epC/deWg+GYmR17tZnhj3DV73P26ksssK1bxHaE8MnH8zVSHR6RsBTak2mhyd6sEdMQ3/MKlM7Zw50dQf4hVWiqZOAr2KaRtBo6LT6inU4ls/EPWoVTOgK7SK8DqOY9acSpPOrKMj3tP8AenPL8hQJ40d3uH98dHUf5RVexLqRKePH+lZP+xtuoBfYW8Iw0qSnOVQDPdSADz41Z8JvohfvtmOaDm9QYPpNZTiCVZoVPQaDyB09ais4st/Dl6pKgJ8OB6RTVAzuez6BwuKQ4nM2oKHT8jyNduDvDwrLdzt51NuXkpPvp1sPiTGp4/q2rghSgUmQUggjQg3BFA0GmeBNdBNxTkV0BcVCEXGDQVj2/uPCccscQE/WtkxI7wrK94ENHFvKWhCzmi+oii1WwGr0U9W0ulNKxvSrQMOwpl7uJScyYHhFxVb2wy2lxJa9xQFuR40MZRboqWOhjbau6gdK8wae+nwpzH4cuOobTqfoCfpXuDT95HKmReqJ6nWPVK1frpUiO6kedQnjJPU/WprboMW040aIxtbUmYrypealVlHI2k9/1XP5lf1rr7e7/wBVz+ZX9aZbw46+tPBhH6NZWzQonDmMci7ij4qJ+tBftGYqKjJJ/wBKJvoGUwL3iguHIMg8NKbh3bFZdUh3E2T4f0r6edx/Z4NMDvEDIeZI+lfLzt0qnlW/7R2khTDCknMkNJItHeVrY8bfKizT4xFwjynRxh8PmJUvvE3k3nwFdOkJUITP5elDGceoq/XpRFOKUlUISFOHUn3UD6npWDs3JewQfSoZHRdsGFpPI8fKsk9qO7gw2I7RsfdOyfBYuoeFwfWtgwWy1K7zrzipEZZhI8E6VVPafhVuMFkIK3Atrs8o98KJREaSOPCwp+KXGSFZoXF/Ix7CGxHjRLdhoF4hSwgQbnwNqm7R3JxuFZ7Z9tKUSJ74KhNrgePCaH7vNFTxAUE2Nz4GtjejNH0F2IKTCbjjNS8M2kj3V+tcZFgEZVGeITIPpUjAnhBB6pI+dZ2xyPFMgaZxXIdI0W4PWpCnTMRxivXUgG5A86W2MSG0Y5waPODzVUhvazw0xLn8yv600hIJ1B8xXTgA1qrConYdRJSVEknUk631NB8hW4UgFRvA1vRjC3KQm5MADqdBU3Y2CLePAUDmCzI11B4jUcZooyqwZxuits7uPuKEJUDzJPyHKrNs7cBa47Zz0rRiwhJkwK7Rl1ChS5ZZMdHBBAB/2fsowZGGkPp7wXNyR8PgdKL7sJUMOyFe8GkgxpItRLAbfwwUGe0Tn5DvHzA0rnZjeVOUi6ZB8lKE0yLsTONEiuka11FdJF6MURcR74rDt4dmqcxDyw53i6QE9OdbjiR3ieQNYPtDGK7dahwWr86tuiqseTuVjMsiIifeNQHNiLbyqcVAidJAvVrXv+oNZEs3iJJqu7Q3iU42UFESmBFAnJkpIZacaS8l0OAkA28RFQ8GZWo0/s3dx93KoJhJ4mrJs/d5llOZ9UlRgAUzSKVsp5+tIOkaGtKbdwzYswjTiB9aa+3YMq7zKOHwgVFIJxM5+0q50q1Fez8BN20A8opUXMHgZ8kcmz5qpzs1fgSPEk0228Pxp9aeK1GAmD5j+tJpjlQ0ykknMBYTagOFbBUsFQTrrxM6VYk2UQdcv1qtAd9XOT+dNxCsvoTjhlETlkRwIrUmkrOGZgCAkA6QLamsem9qsW6mKWHozHKbFJuCPM8BQ5oOVP2Ag0ppmhbHT2ioQZ5q1A8OZqbtTHrwwhCHCToUthQn9owST4RUvZASpGdKEoi0JMi0zHnRB3aKEgZ0hRNgCBc+dY1p7Oko+XRF2dt544dbq0CUAWAULkgQRci56029jXcSx9pP3RbCoUpBQn4FCAq5MpiiuzcamSkpBzJMgRk8CZ8Kq2/e+CG2Wmg0n7yVFGgCEmBpzVp+6abHfQrKqRb9l7RcxOHaWpCJcGXIRIHAqJ4isf3+3ZTgXoRCQpKjIJj3hYAkxE1Ytme1IIShP2VMJEABUD8qKYT2lNvOobOEBK1JQJIMFRA5da0rrZi/QrmDgYduRqLVa8VuwlKCS2EgIBzZjyvJ0qx7b3X+0oAypbi4yBIUekxpUNjdV/7OGO0UEhRPehVuAJGoqOLFvbbKQjZqFByFZQkXMFR8ABQZzBpRiWkE5hlm6SPka1nY+xmsHBUXO0UIJtlJ6CnsfsDBYh1LzgWXAnKDmItroLVXw29jMc+KozZbLQN0J9BXK8I2RmOWKs2+m7+GYYUtsuZyQACQQfW+lZs6yo/EfCbULVOmL2lbYacQAodkkd0g5uovV8wuDbccZxSYjJCQB8JFpPMGRWUM2MAmrBurtpbbjbOY9mty44AqsI5XjSkPbOjjdRSLbvNsJbwMZY/dzKnxUqAOkU/ujsLsUltw5gu3hNrVOx+LWEHKBrHgOZqKztFUBTY7UHRSCVGZjUCDe2tUh1L/ANPN39yUsPyteYjS6hMGZIBifGrGod9cc6rrz7j2JbUgqBBCV9whJIExKrqI4kaaVZEaq8aZDszZdUKK7bF69Artsa01CGwfjDGc8kn8q+fsRdSja6lH5mvoLGN5kuDmCPWsl2zuvh8OQHHlDNJBiR6x1qNFJlZw+AW8fuwDA0o3sTYAnO9lgaDUE9eVO7OwyGHELZeDgm4sCOtWzbKErUlTUQsJNtAoi/zoUFTtA3E7SCAAkDSLdKrmMxqiI4gkirQ/sv8AKD41WNr4YpUKtEZDxGNJSAb2iooxUj+Eg+R1pnFNn0+tRWiRfl9aOgGy14TEhSEkuQYE+Vq9qtB0jhSqUXyJGwV5GAq3uqNwDcqjjRRvEI+JtM+AoPgR/d2+o/76kMNqccCEySowBReomV6oJpxKODYPpXmXDquWUz4RRbEbvtssrccK2ylJIMBaFkD3ZEFKibDheqOdorM3jwqKJPN7hxzAYe0MpmeJMAeFTNjbtqxmKAww7FtA++cAEJk2SgcVkD69DUwtayEpzKUohKRNyomAPMmK+ht1dlJwrDbKfhHeP4ln3lHxPygcKnHYaflogYdpKQptACQ2pSAOQSe7P8MGetN4nCJcELHl9R1pYolvGPA+65kUP5Qkn1SamNIClCdKxSVSZ0YPyoglQw7Trr2VTSEKUSQkqIAmBaZJEa8aw7am0F4h1TrmqoAA0SkWSgdAPqeNbeWm8YrFsKsjMhKSAJT3RCwOiwT1Fqy7b+wFYZ5TL7aQoXCkgpC0nRaY1B+V+VasUdWZPEybdAXCNTUvBKKHAoaoIUPFJn6U42yke7Pny5g17hh31z+GpO0mZ8S89MsTftXcmVNejihRbB+2BA95lf8AOD+dZo2wwTdcU8dlI1S4DNMtolo1Fv2r4ZawVMK87kVA3h9oyCvMyCi0HjJ4eFUXZuFyrUCBZJ5VJ/spK7nToaTyk5UPqMY2SF7zPYtyHFSkXA5USb2cpQmyf3j9BegLWGDLio4AR5mp32xRGtEo22xckpVZMXs9tBlbw8Epk/M09sxhsLLsLUGUOPGYE9kkrAgcyANeNCCb3NW/cbZpfRjDFvs6mkjmXQT69wfzVaxxQz4kmW7ErsFASkgGR6zHKoOJTftGgMxiSDE3mbETe9e7vYjNhG82qUhJ5iBUjZ2wS6c65S1MxJBX/QdazRTbpGznxVsngJbwTqyodxlQSRoFm4y9QrL51Gwu21Lwzq2gFvJSSEG2YgTbxoD7TNshAawTcJFluAaBIPcTHVXe/hHOqds3a623hCtSPlWrhSoxSnyk2zUNl7w9oy24QB2kdACZ7p5GQRRNT740SmKouExyFsuMhMEqKk3+MqCjB5Ez61aN3Nsns4d1Taoo+jFZJNPQ+689fupvQTbGzg+2WnBY8RqDzE0Tfxri85QkKGgBmZ8qrG19puoUnM2W7GdbkGDr+r1TihfOSVg5Xs3bbbU4XlhI0mCSeVGti7NCGB3swBTFr6A363qTtbaObBNIHvKC1H5D8podua8pTbilnuqdOUcgkBP0oJ0acO42GMYoATaaqu1Ggsgx/vU/bq1JJWT3dKEB8qsDQpjJRdAnF4UAmRrQTFMRpVgxWJAUc1DXlJVpxE01CmCe2jhSpx7D9415V2DR5hHvukCZif8APTzW01MHM3AXzico6Dma0vGvB4EOfZb/AIcOg/mioSdl4dJlMTe6WGAdQRfJqNPOo2DcbtlZx282IXhlMulMKAzAgFZk6fsiwPnVPJg1dd/nQEtoAIkrUc0X0AFgNJNUd2jh0DJ2WncnG4ZjEdviVKhsS2hKFKKlmRNrAJEm5FyORq5Yv2toA/u+FWo83VJQP5UZifUVlzK5p1pNyPMeBoqJZtm6+O/tHDtvuqbQ8CtKgO6mAqwEk8L3n3qOrwiUJueGs/WqH7IwlSX2eIKXB5jKr/Kn1rRto4T/AJfBAVKz+yBPzIA86RkxJ7XZqxZqpMh7J2OGSs8XACfnA8pqpbz7VwuPddwK1pbxLCowzpICHCUJKmSrgc0pIPFIOoIo9vntt37M79nOQpQTmjvQLmPw2nrWLPYJKtRrx602EUlSEzbbtkhTSmlKS4kpUgwpJEEHSDSS394Y0IselRMTi1lkBS1KyQE5iVEAkWBN8ttNBUnZD0+8eXlVZI3EqDSkmAnMCsTII8qTeGVPGOlantDd1TQClDukAgnkaEYrZzXxDz0oOfuZ+bbqgLsRTSUvIcbJK24SeIVzqAjAO/DfpeiOAxRQp9KYKSMt7mBexqTsfawTrYg8x9aBT2zRPHkcY0B0NrSFBYIVmAIOtv8AepTZqdvftMPuIVAzZQFERcg2NuMflQ5Jp0erJTWmOprS/Z2XRhT2QCQpaipRElR9202ACUp8yazQq1jyrdd3tnDD4dtofCL+PGoWiGjBpTmKUwScxGqSom9uU8KK4baaVoJUMuWf3SBxHkNKcdw4WCDMcYJvVa3/AMYGcIpIgFUISP3pn/AFfKokl0E5cuzLdp7QL+IceV/6iiR0TokeSQBQ14gqtr+vSnVK51yhIFgOunOrAJ2DxKhF6s+z9qnRRm3nVOQqnEYuKhDdN2NrsBsIR3Fm8EzmP7KuOmnCpDePBKw40ooIIjLnBBN5idaxTZ+Ie7doyQQtGX+YGtxGyXNQ+odClCvnFC4t1TInGPoCnNmYRSggYZfZ94Zh2icvKxixvUXF7uNYZpPYZuzk2USSCb6m9WZGBWBd2fBCaGbfdPYEX94TaPOhyQXFh4Z+dJFCx2EJDma4Ig9I0NVfBqMEpF0mDV0x5+6WRpF6qeyyApwazFYYyabOnOKcUBccskmaFuKM2ottpGVXj+VCs81si7Rzpxp0NqeIMTSrzu8aVFoCjTNpbWbbBypTQhvesg3SIqu4vHZuNDVLo2ZGwrvrtMPuIIsA2B5lSifpVZdFqlYhUmmHRajQxdHGHXpNS0KulXkfCh7Zt508FVZZffZziezxzaZgOBSJHAkZh/iSB51uBbKxlUmbGVCIkERavnLdzEHt8Moah5r/ANxNfQjGOIIHAnpGlUw0cbR2cgtrTkiUqHS4Ir5/aVAE8Bet8x20ylKlcAkk2tAEmvnE4km/E/WoiP5nm1V/dx1FcbPe0o9sPYP2rDuqUDMhKFR7qgJnqLgetVjs1NrUhYyqSYIPA1XJN0DXqaDgtquPISiZUkQCqSco0idIoa2S8uCo2InjqqLCuN1MGtwdqhRlK8uVASpZOUK91S02gxaeNWPZ25q1w4FuIUSbLaCcsEnvHtKTPHu0Pxy9CvbRwCWnnEIJIKUm/NVSNqbpdkhLnaggxMjS0k07tdojEXMylF+d/wAqO7d2wkMrayjtMoAiDExNzYKgnWlRTvQ2T1szPOSrQgSOFT0Gob2MWpUG17jSpDJvWoyhfYWF7XEMt/icSD4A5j8ga3mbVj3s5YCsc2fwJcV/hy/99a9mEgfrnUCH1WFZT7StoZ3kNA2QnMf3l6eiQD/FWn4tyLaWJPThPzrDNsYsvPuO/jUSOg0SPJIA8qjIQVQBzpIRA+Z8a8UJPQfn+vzruoURsQ5lHU0y2oZoPujWPzpl97M50En6V3hHIUD1qyi27MBQB3g42LpPFP1q/bme0BWKxCmXEpSgJJCyYUSFAAEaXnTpxrLxi0JUEgHKfeCevKpzW0G8OtSchCVQsxHaQeYVbnFxS5NraGRSemfQOc8CP11qLiW1OBTakApIMKn6azWI/wDHLKRlT9qjlmbSPlNcn2iNgght4kHi6n5wir5/IpY0vUte1cMQFtqtMg9CKqGzMAWgsm/e9aO4LeJONbU6E5FBUKTMxyMwLEVFUqcwFYmqbOnFqUUyI/gQ6g8+FVh/ZpSSFWq54NqBNLEtpVqAapZHEqeHlsz5WGPKlVwVgEcqVH8YR+GZRwua8Jqwt7BBUU/ZMVqQCXEpJ695kAVE3j2H9m7IkKT2gV3VLbcUMuX42+6ZzD0rYcpxaApF/wBfSm3TanE63qVlQoQRRoYugI2bmieycEHnUtFeQqkJMSM0EhJEjUiJ66Gn8Fu+484EYcFajomL+JOgHU1ZUey/aQAWA0FC9nYUki8zAAI5zVkoGbqYJaMey04Mqg6hXQ5e8FA8UnLrW5YbFpnvQOvA/wCtVfZO6inOzcccaDyUqMpSYCyLxySZMgWBuAJijzey3BIK0KFwZBBBjlefWlOa9DVHFJKmgVvxtcfY3UtSpbkNpCe8tRWcpAAvoSaz7Zvs82g9B7Ds083VBH+ESoeYrUHd30tpUsKBtfOBlkaED163N659n28YxGH7qSkJWpKUlSlwkCwClXPDXmKkJtuqByY62AcPsx3ZOEAfSpac5JW0ApAKjYKzQU8piKou8+MZxTod7LIoJym91gaFQGhF62TeHebAtNrRjHmyFApU176lA2IyJk18/wC1H2i4v7MXS1JydoBnA5EpJn+nWiUEnYpydUWPYmNaYbMlxBObLkTKVAhKSSuDChlMCKM7N3uw7ZUMzhKiSYHHKpIMZEj4511FUjZG1XmpTlBbUZIUPdMRmTexiJ8BWo7H3OGcOYhWZCCklIMyoiYOlhYSRxPG4qTjQyCk9JA7aiApaHGykENNzIBEwFHzEx61VdsWJlR7xOaOczM6m962fE4xsYhLa2G1IdIDaylJB7sqQokWUINjqNNDWT+0vBttYxSGhlTkSrLwBMzHSw9aXja6QeWEkrZTH3ZWk2JB1HHr41MYNxUbA7LfdzrbbUpDYKlqA7qQkSSSbacNadZMEeNOM6L/AOy8xjT/APxX5SpGvpWqNuQsz4/Ssk9mT8Y+ObC/8yDWnnEpzEk8PnIqg0Q97seUYZ9fFSQ2PFZi3gDPlWPYtYbTm4myR1On66VovtFxIDTLYPvLKz4ITF/5/lWf7C2MvaL7gQ4lsNIzJzAkG8AGNJ4m8Wsaj0Sm3SIiHCABA8frTGLxJg0/iWVNrW2sQpCilQ5FJg34ihuMV1qAsi4ZcrUeg+tTvcTKjc8OJofgj3iSYkWvE+B40XwuNLKgpbQXOmcZVEfsmII8uNWUgxs/eNpoD+6qPNSvpaou8mJD7geFgpAtygm1G8PtBvEo+7iIhSCAFIJ4nmJ41X9qYVTeVChAlYHnBH5GhktBx7K6pFcKbqUoCKirZkzehVlyaQe3Mx/YPKzJUptacqsoJynUKMcB9a0RlpBRnbIUlQsRxrLtiPuNrhtRGbukazPCOJrTvZxuji0NkYn7to3SkmXJJvbRI86Vlx3tD8Gbjp9DuDblMDnUpvd19w91BA5qsKubbGHwqCqEpAuVq/qao+8PtVQmU4VPaH8arJ8hqaGPh/cbLxn5UEU7kO8XUA+BpVnL3tAx6iT2gE8AkQKVH+HiJ/FTHcLgsOlecqelClpMlsGUgE2jkedTNpbOXtFLScEC6Wc2cKLaChLiW8uYlUEy2rTmKpmE2NiC7lGGcWYMiCLcZMRFq1DZWzH8LhkONt5mwSt9DagowgWbIABUNZiZ4Uc5cF8xXFTXVIq7HszxyjYsA8i7J9EpNSz7LscBZWHJ/fX/APHVsYx57Vt9xK8Oh0gtpIgZCMsWAJNxZRB010q5J2mltRQ6oEgJgxBVIMyNARGvGfGlw8R5uM9fOyPD+Tf8gTdbdtOCaygZ1qguORdR5DkkcB56mpe09oqDcJtKwknWE3J+YHrR5lxLiQpJseYg2MaUzjNnNuJhYnqJBEGbEXrQ/MtAxfCW10U8PRMFQPMXHmmjWy1OLmZKSR3wmfUT168DQvEYJLD+V4lTRAKXAYKCTEOACw5KEDwq5YZqEgJjLFovbnPHxpcMLW2asviU15QftDYIeSULfdCSCFBBQmQbETlJHkZqNsPcvB4XN2bZOYQrOtSwRyKVGD6UeDB5119n/V6copGNzb7ZWdv7oYPFO53me+AO8glJVw72XWI11qr7S3K7NcNYJh1u8HM+lQ/fl38uXCrTvbvU1gFALBUpaRlSNTBM/mONO/28UgKUWUggG6oiQDBOaqaQUW0ZnvZuwGQzkSEKcSoqQlRUkRlgpUoBVwdDNWTEbytsO/ZngtJIsSklJkqTaP3aLYbHYTFKUrO2rsoEheZIKpjKYhR7ug0otj2XCc7QQe6B34VPHUQRqaF49WMWamD8Js55aQdGyJhyyiBcQDfwJjheqdiN1MK84X8S7inSpUEphMAnupMgkJCVJTIPCeNXVe1FhP8AepSQfebBIjraJ8CPCoTezkOZ1trQ8VXEyCByKLT4i9czxU/E4neODr3W/obMU8OVVlf6E3ZGxcG00cKwkrRF0Z8xKXICld5V0gKE+g5Uy7u9s1tfZ/ZGJAk/dIMcgSRqdfKutnYF5alFCChcZZ7yRAOsEW4xa9rUf2Puw21JWe0UVZjmiATyHHTjWjwebNmjc4cf1/1/fRl8RDHjlSlaoE7M3ZwuftWMKlCspGcSgQTcWsdBoDR/AbCabOaM6uargeA+tFIpVv6Mbkyi+0rcxWMb7Rgw8kHun3XBqR0VbXjWWez504baHZvAtlxC21BQKSFGFJkHqiB419FuTEgSeWk1Ut/N0k7QYHZKDb6FZm1xBzCe4o6pkxpoQDwqNclQcJuLTKhvXugjFuqU19ziDHvElp7KALwJQqALjXlxqbux7NW8OoLeIec4KKRkR+6gkyf2j5AVXHd6C39ziypjFNwFhSSUKI0WkpnLIvOniKk/8UPoT2odzIOhWQmeEJCiLjiByrK+a8rN1Y35ky57cxqWYQlJcsZAhUQLk2sIn0qi77oxOKShIbSptJKpCu+DBGpBERwgzblTLu03FOPYhbgLSWVhEGynVoU2BGqiAoqPKEjnTDO0FrbbAXlJ7M5uRsZ8qKEK8zAyZbXFFZb2U4iHUyDfKoCx5pKZuL3uP3al41RKEvFOdINgZGUwQUnqDV+21uJOdzBrOdXeW0sjKtY+NMQAVCUkGxBnXWn4NXYsY1l5JGcJSgLspDqVSAqb5gL9QlPM0bknG0J4OLpkHZTbGJWywplUrdMqCoOXKe7AHDWelXB32d4QD456rP1qH7M9noaW4+6oZ+wWpknRIT/zDfjdHlNVPauOexRzOvLKuRMIPQAQB4UvbfZJNJdFn3E3dQNquBPebwwzTMjOoQkTzEq9K0zbu2msI2XHVR+FPxKPJIqk7k4prZ2zu2cEuvrUUo+IhByCeSbEz+1VM25tN3EuFx0yeA+FI5JHAU1IC7FvVvI/jVys5Wx7rYNh1PM9arqkxU5TJPGor2CVwNGCRyrpSrk4RdKoUfSf9llSlJIBSYMKSOIVML1OlwedQMNsHFMqUGVIS0q5T5WAEFI0AnkONOs4VwtqKVlKuCM2kKuelj8hUR3YmMWR/eSgdDmP0pE/DKfbZoh4iULSS37kf/hp9ZQX3kd0pJ+8UVWIMAxa4nSnNsbAZU4XPtBGllAuEKAIkKWQdLRXStkob/8AyMarwUtKfkb0yrGYBFhmePgpX+eBQrweNf5bGLxWXmpx017IisfZkLBSp59xOmWUpBB/ZE+UmrBhsbinj7nZp6RMeJvTu7zwfzFLXZtpsCYkq5RFoHXiKKPbJKv/AF3EjknIPmUk/OtEIQgvKhWfPkyy/wCR2DUbMXJUtxPGdSYOoNhOp9agr2mjBSW3g4z8TU5lIJOqAgEgSdIqdi9z2XPfeeV4rB+RFeYXcxlBlLjnqm3gQBFGpyT0tAccbW39BzZ+8LmIEsYR2PxOAtp8g4ElXlXDuGx+ZS8yEg6JBWYFtEiRNtZ40WwuzFI0xLpHJRQufNaSfQ0Qg85PpR81+VfX/Ylqun9/sZnvduovEtpU/kLyT3ADkVlP7IsTPO96zXCbnlboSQVAk3ggCLQrrb5V9B7Q242y4EOJXMZpSnOBMi+XvcOVM4FtpTnbpWktqJKJATCtDGYBUyDrQyab0FFNLZXdyt2kYVgIcaQuVZlrVCUDkACO/A6VaMK3h1WbSUpHFIKWx4fDPlUrEbNSZVlzq4BxSigeRkfKm1bOURLiu0I0TOVA8hrTLg1X39/sIud/f3/Jx/Z7a57NyY1EhYHjx+dVvGYfDsYhH2hmEk/8xMhInRSo+GbHlxotjdosIyh11SEkSG0JywD+Ip4eFFcbs1p1rJFo7p1iR11B60OOeLl3f9DpQyxinJUn18yc0lIACQAOEaV1VP2PjXMG4MO9JaJhCrns50E8WzwPDQ1YMDtdtxxTYkKTeFApzJ/EmdU9amTG4P3QEXaCFNtPg20PI8+VO1Fx+FKwcisi+CvoRypZZJV01qBiWSvvNqyOp4T3T0UOI5H/AGqHhNoKnI5KXE/q/wCJJ507isUhZLZUWnQAQeGvA/EmatdhcaBO30Yd5lX2phKlogHMhKovxkadfSg2B2Bglp+7bS4D8Klr7tohAUohItoIo+rF5l9m/CHRovgoHn+JB+VJrd9tyT2fYrGi0WBPhoodaXkjJ9M04pQivMit47c7BupsXABY5Fzl/hUDQXEbhxbDv5xEZXBlMfvJt8hRfFrdwmI79lH+R0AapOhVHCieB2shTiUNe44DbWF68dPCs3OSdM1/ChJWiv7EVtBhCUYprtAjuhxC0E5RoVAkE25X6UaxuyMLtBEvok2HaJOVfdkAE8Yk2INFl5r2vy4GoeJxyWkqcWQlI1tF/qaG9htJxplMO5S8C9iVIlbKsE6ELMAyVIlKotmiT1qjtYO0r1vp42q1bw75OPjswrK1PujU/vH6VW3X/StMYepzpyvSPHn5gTpYTwFRyqvVLppR5UwWO02u2lNqdppTvKoQd7SlUY4ivKhDdEb5IIhLEWmSQBwtIE61X9p7UcfX31ltOgSkqyHlJ4nxjpQnDK7pM8h9aKYRvN1FJ5NmtY4x2jrDbFTrNeYNOZ1LTaJUowJ+ZPQC9E8NhFIH3ZkfgVp/CrVPhceFWDdTZATL6kkKVISDEpTx05/l41FG2SWTirDmBwqWkJQNANeZ4nzNSFGTHmf1+tDTS7qA4C58eA+vkK6QeJ/XIU8xMHbTwbKTmLBVOpSE/OSKhhtj/wDWc9Ef+VG8RmKSEmDBg2sYsb9aFjDYv/rD+VH/AI1lyw81pfS/7LTJGy2GpK0MqQUiAVZdTa0E/o0WSbnoKg4RDgSO0VmMkkwB4CwinGXTGhBJ4/SNafjjUSmU7azufFOEXvlEfsiLehrvE4Q5IXlIUE/dqEkqClc7CArx1qy4HYzaFZk6mZmTM85NLHMhKCEoTIEGBePH09Bzq+I34nSRxu1gUtN2TlUfeGaYvYC5AERaijwNsuWPimRbmI/KqxhXVkkBRB1BAmOkiw8TU1na60WdTmH4hY+Y/pRIXJbsEbw7OSpwrFlFOWx0A+JPWI9Ka2JhFtwo4lYGkqIBMfCQNY60cew7OIBhZJ1sQlSekATFCMXsZQELVnbSnuie8TM3/Ef1Fc/NilCTnFfsbYZ1KKUvRaGNovnErcAWEqQAQ6ixAnuxzBjTxqds7eBRbUjEIKMS2kwqPfSPiSeNCXX0IaKQnItR7xJsMvugmI00gmpGytpNvITnhQBkHiCLSDQ+F8Xyx7d39AvwjX+Xf9B3Y+8iVkIUT+8aPPZrKReOHBQ8eBqiPbPIVnw6syeKdCOqefhRbZ23SiErEj5itGPP6SBzeGvzQ/YJ4vssQICsriTAJEKB5EHUGhD4C/uXpQtPuqGqTwKT8SDyolj2Uvd9o5XQPJY5H+tSmMHZKnAFLSDB4ieAPHxrWY7rsCYfZzhSBiAFZTKCJt1nkfw0bwWKju0niarOP2mtzMnDAQPedNkdYVpHmKiTe/Ql8iZvltppLK2z3iQYIgkK0BRIsQfi4eNZxsnFKSuxJVYiOab/ANaI4hzCJKi8+rELOoaEptoM5IQnwk1GxG8akCGGmsMn8S4Uvx7wgHwQqs2Vqb9v5NeJrEtbNB2fjUvICjYx3unGfpWQ7/byKxDpQgw0gkJj4iNVf0qRitqONsyl0ntJuLGJgnzM8B4VTMSqrxQ9WVnyp6iMqWa9axJB6VwqmzTjKTi7Fxp+VLtqgtvR4V2SQelQg+V3qM8oiulE612RmFQojfaKVeKw9KoQO4LaygmCqRz/APJPPqPnV33U2kHCEkgK4df3TxrO3cJADjZkcuI/qK7wWMKSCk5TOnwk/wDaetJo0QyG6tJoi7vEU2DQgftH+lZ5u5vqFQ2/IVz+L/7jwv0OtWp1QWkKSQpJ0IMg1ab9AqUuya5vWsXDAI494kzziL+VN/8AF6yJDaCPE/qaGFuouLZGoseY4+I41TnINY4ewYVvk5P/ACkeqqSd8nf+mj/F/WqkXIPet14f6efrXeakvJP3HLBifoXFG9yzq2j1VXuK2u48koIQGz7wgkkcpJjXpVUaVRjZtFHJJ9sCeGEdpBbCY9bXErTyJOYfur18lT5UXw+PS6YQsZ49xVlfLXymq1j8UltMmqwztf77MTadKb8StCXiUtmmYbBLupSkgkmyPdjrOprhbCge+SR0H9NR4UJwG8RSBmOcdT3/ACOqvOaOYbGtPC0g8j3V+nHypqaZnlFrsFvBmZBvzAP50xiMa4gd1aVxoFQq/DrRp3Z6TckK62B/i5/I1FDiEkjJlAElcZUeBUuL+E1ZRVXMWtYIcwDZBMmSQCeqYM01iMvdyNpagCUJEAUS2tvVh25g9oRwQJHmtUD0BqjYzfVK3QpTYQjSUqKj/ETY+ArNnxpwqCNfh58Z3ItyHlADKafadUfeofgcSlaQpJBB0NTyCU92ucmdJotG7+ISSU2k39KMuLABJMAamqVu80W3Q4swLz6VXN+9+yslnDKgCylD8hzPXhXVwO4XI5HicdZKQR333uF2WlBPBR/04+HryqgY/bWeM6luxoFHujwT7o8kihWUkyb+NPDBqI0qsmTnr0JCHFAja+8LwVlQQ2OaR3v5jJp7ZoK0IKiSSJJJk6niaE4ptK1lQJg6UewfdbQniQPIa1fHSQN7bO8e5YDgBbwoUszUzHuXioSqYLY2oVwa7NcmoQbNeBy3hXjpqNnqFEztrV6h2oaHaXa1CrCQVSob29KrJZIxdkSkkIJFp43t8jTDL5FjcfOlSoC+mEmsRYA3Tw5jwNWPYu8jjEEqKkHidf40/F4i/XhSpUt6HRZoWy9qIfFrKgKIvEHiDGnjB6V3j9KVKql0PgwG7TAt7vodPLlSpUkfZIwz0mNCNRRvAYgC5sKVKjSAk7QO3jdKiIBiOgqvtNGaVKrfZS6LdsFGVJogpdKlTUIl2c4vewMDKtwlXAZcyvAKNvU1St4faEkkgIk81ysjyslPzrylV2L6KPj9vuOn/b8tB5AULefUT3iTSpVYLYY3b3iVh1ZTJbJuOI6j+lbXu40XkoWDCCdeMeFKlSJ4YuVsfDPOMGkTd4t4cFgVdk6hThWk90JkweMqgVku1UNKfUcMhQbUZSkwCm1xrpMxSpU/iqoTydg/axW0ggwlREJAuZIt3uFTcBi8zaVHiAfUUqVSkirbZW8Xk+0kITob8hztxog07Kio8ATXtKiBID7kmm1KpUqhDgqrkqpUqhRFecFRlrpUqspnGavUgnSlSqMokJwDhvA9RSpUqDkyH//Z"
              alt="Image 25"
              style="height:150px"
            >
            </b-card-img>
            <b-row id="subnav-1" class="second-para">
              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-bicycle"></i>
                <h4>Prioritised on-time delivery</h4>
                <p>
                  Take advantage of our prioritised corporate delivery team. All
                  meals arrive on time, guaranteed
                </p>
              </b-col>
              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-utensils"></i>
                <h4>Excellent choice and quality</h4>
                <p>
                  Choose from the best restaurants or our curated menus to find
                  the right food for everyone
                </p>
              </b-col>
              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-headset"></i>
                <h4>Dedicated account manager</h4>
                <p>
                  Rely on your account manager to help you with anything, from
                  finding the right restaurant to placing your order
                </p>
              </b-col>

              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-concierge-bell"></i>
                <h4>Perfect presentation</h4>
                <p>
                  All meals arrive individually packaged and labelled for easy
                  locating and pickup
                </p></b-col
              >

              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-users"></i>
                <h4>Ordering as a group</h4>
                <p>
                  Select the restaurant and time and order dishes for everyone
                  or invite your guests to choose their own dishes
                </p>
              </b-col>
              <b-col cols="6" lg="4" md="3"
                ><i class="fas fa-cogs"></i>
                <h4>How it works</h4>
                <p>Learn more about the process View</p></b-col
              >
            </b-row>
          </b-tab>

          <b-tab no-body title="Cateering" :title-link-class="linkClass(2)">
            <b-card-img
              bottom
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7rnELEPHyUEju1c0sYR8K7ZrKyS7qTJznV5WX-SLF5-_ITm4F&usqp=CAU"
              alt="Image 26"
              style="height:150px"
            >
            </b-card-img>
            <b-row id="subnav-1">
              <p class="first-para">
                Delicious, professional and presentable! Our catering team will
                take care of all your needs for any business occasion, such as
                workshops, seminars and conferences. With excellent food quality
                and guaranteed on-time delivery, we take hassle out of
                organizing meetings and events. Contact us to learn how we can
                customize your corporate catering needs and save you money
                today!
              </p>

              <b-col cols="6" lg="6" md="4">
                <b-card
                  img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7rnELEPHyUEju1c0sYR8K7ZrKyS7qTJznV5WX-SLF5-_ITm4F&usqp=CAU"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    Some quick exampl
                  </b-card-text>
                </b-card></b-col
              >
              <b-col cols="6" lg="6" md="4">
                <b-card
                  v-for="item in catering"
                  :key="item.id"
                  :img-src="backImage"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    Some quick example
                  </b-card-text>
                </b-card></b-col
              >
            </b-row>
          </b-tab>

          <b-tab
            no-body
            title="Why Us"
            :title-link-class="linkClass(3)"
            id="subnave"
          >
            <b-card-img
              bottom
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSYUrwzXNv-47nBU4P54pzj19LGnpoV6JD9acYfmTV8c6Qo4Il&usqp=CAU"
              alt="Image 26"
              style="height:150px"
            >
            </b-card-img>
            <p>
              Jumia Food is the global food ordering platform connecting over 6M
              users with over 30,000 restaurants worldwide. We operate in over
              20 countries, nearly 600 cities and you can rest assured that your
              company is in good hands.
            </p>
            <h4>Key facts</h4>
            <ul>
              <li>Founded in May 2012</li>
              <li>Headquartered in Dubaï, United Arab Emirates</li>
              <li>Operating in 24 countries</li>
              <li>Active in more than 550 cities around the world</li>
              <li>Partners with more than 30,000 restaurants globally</li>
              <li>With a team of more than 2,000 people worldwide</li>
            </ul>

            <b-row>
              <h4>Group Average</h4>
              <p>Work with us in the following countries</p>

              <hr />
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>

      <b-col cols="1"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },

  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-success", "text-primary"];
      } else {
        return ["bg-success", "text-info"];
      }
    }
  }
};
</script>

<style>
#subnav {
  background-color: #30a55e;
}
#nav-item-1 {
  font-weight: bold;
}
#subnav-1,
#subnave {
  background-color: white;
}
.first-para {
  margin-top: 40px;
  text-align: justify;
}
h4 {
  color: red;
}
.fas {
  width: 100px;
  height: 50px;
}
</style>
