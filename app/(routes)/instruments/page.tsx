import React from "react";
import Album from "./components/album";

export default async function InstrumentsPage() {
  // Define the specific links and images
  const allowedBandLinks = [
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465177566_9464269300256063_4680704971637570854_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=LjQpxm7ZBO8Q7kNvgFLwjPr&_nc_oc=AdjwwQiog1ZqbeKvjmxSlhTOAXChXV-Zhb8inA2pTpJudRR41NJ0GTqb5wWB-bZW33k&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=Awc0vRilrQY5EsEgbURpQuv&oh=00_AYAPCZD-W-5PGYUluLOQc_8B0Kaq7SudOHTcNeqthiPLCw&oe=676ADB31",
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465124849_9464269310256062_520521866925378173_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=SkQ2AFgtv6sQ7kNvgErbM1M&_nc_oc=AdjtStHu-4kY5NEjYV1-PNGGDGY1CH4T8uFr1gZHN8O6ZJ6p3AMw0veLjmDvGBEor9w&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AM7byH5bZjYatDykR21KxIP&oh=00_AYAO1JuvXJyoanqOJ1ylOHL1jwCtuVOe7Wr8Rmcb3FtmQg&oe=676AE4DC","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/463302924_9354166917932969_7588652117561240103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=bHZF-CJ6PgUQ7kNvgF_SYeB&_nc_oc=AdjVk19kC5xMEkoEaR2Oolep3AqsoGuxGuRaEbJwvDZsg2KMmKV1SjJKv_NyKQcSZ6w&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AOOhXLifIML5Sgx__8xXoHa&oh=00_AYBUT3G6P4zQsXHM5J1UwyhATxpeRvN1W0Vq1fbYqT0sHg&oe=676AE01D","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465167218_9464268620256131_8094332011453348921_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=BzMHgkURangQ7kNvgFhrqtq&_nc_oc=Adi5a2Bf6iFo24raYy_QrfY86quHdzab9mFpbRVjIjyLS2-S5j8lW7uv5oScz28114M&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=ABxnaml7aBH-imzaEEk4FMR&oh=00_AYBmLQXREGbtqDdqo7vedUSsWjNAgPjy0bcyhZbOyotJgg&oe=676AFFE6",
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/463523998_9354166734599654_7416044136381262383_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=-I5oIgqWP1UQ7kNvgE6vwV0&_nc_oc=AdilLXUsqC9Crz_outu-_dDVnQjrwCNy3pfHlVM_X4Mro5cg6GcNPzxHS1HlFiuGlqI&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AOrkEMOQQGIktZ_U2taL6Kb&oh=00_AYDKZgmAiwu3k0aUI-kzgT0_RKzROhxq1D7YrPOfkGX6CQ&oe=676AEC9C"
  ];

  const allowedInstrumentLinks = [
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465166994_9464269286922731_4316271234013274404_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=6I63uNMVb0kQ7kNvgE4tY05&_nc_oc=Adju2-VbAbyQuuKXbqKlRZeGULbbM88WutnOHVCCBKUzC2VldJRO7x_eqpsI9iwutfY&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=A64HX4wFZA4MJ6J5BCuIRq1&oh=00_AYA8qn-eaD3dLtApsDzLqnNnHt0A3HF5Xyf3IhG8DVMZ-A&oe=676AFCE0","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465179967_9464268350256158_4264790630683328896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Cm_A0pQHREkQ7kNvgFqxC5O&_nc_oc=AdhaKsdAREI8zTUvqAQOVPj06LUz8pKZtbgPSFlN_iV0nvzK12tYmhblIMrDoop8sqs&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AEZhgYQQhSoscMl6X2HjRFO&oh=00_AYDvLloqYLyMexLZzol9EVBPPLhicM7UPcXSNwULoCm-mA&oe=676B006A",
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465104207_9464268373589489_6753342934994948728_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=rHFkFHC8AKIQ7kNvgEqStCV&_nc_oc=Adhq1Ab2na2KOWyrJuecHBv9e8XZhMebbX09XPIAyP2nAxolBaI4wbWMLohsiPfXx1Y&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AN281IpXCEKpCB8TnPQy60C&oh=00_AYD5oJDTqkmAf9Jsm-xAlPDEocji92Cj4mheFK9-VaTrWQ&oe=676AE505","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465102816_9464268600256133_5782691934413026025_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=xMwFs1TeiCMQ7kNvgF4tcQ2&_nc_oc=Adg86qnXMRwycE9KfC_hNkxXmSRgXM6xmpOLj-rrXKRjCwAjcUcWYQg6LQTtCEEbq7E&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=Ai4x_4biNVsMKugsXU1l_6d&oh=00_AYDoofF1UlQGEjFLtA_9FRdVEHyq1_KGlV41xgirsRWlyw&oe=676AFD6F"
  ];

  const allowedEventLinks = [
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/462967474_9341368019212859_6294509509424419991_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=h50sGJlDAnoQ7kNvgEVoQoE&_nc_oc=Adh6dglhf1l-gzFt6-_gPcDushczxcebwSDuK0l_sIOivMYt_LtzIKeZYSRQj4ILpzo&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=Aapr-iY060R7K_I1v5Etl5u&oh=00_AYA3JwWbP5JuQLZVt7_Szte_TXMf0TddVcDfxYVZQXpQOQ&oe=676B063F","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/462915772_9342784005737927_5982771336797046102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=2steNw069y0Q7kNvgH00Jx5&_nc_oc=AdhY4QsykiYa-FtZDiJCKzSeMtM5iWGXCOaNKsFV_y5oA9GKIzHXRD-huD1KyQYEq88&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=A_Y4qmfyS249EsuKPU0n3Fw&oh=00_AYDjKglzoKKa2IRe1gFvS2gkDWggxmPzHTZcIye4T9uU5w&oe=676AF2B9","https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/464420881_9409195779096749_1761837674279493593_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=OGSEccsrHlEQ7kNvgGnn3Vn&_nc_oc=Adj7fLxM6lj72jWhvkk1vPGIW21qRQoEsnzXe8yX-wdkU3SyuB2RGGxYDksGHr7obWQ&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=A69Nph1bIyLTSfVtvSY3Djj&oh=00_AYD6Krf4-XRrxOjSF-MWSchHR29f4RBOXaWpOdczBhSZCg&oe=676B01D2",
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/465158896_9458438810839112_3421117131386829962_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=J1QretVTRpYQ7kNvgE8JXCL&_nc_oc=Adik0yeU-KgMSMCyO0ggJUY6e0YKvW2cQ3kBOxOvInhjbStMsCwY0xyJq8BQkV4KoLQ&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&_nc_gid=AHQ8Og6ENoHGpmi-gClDWQe&oh=00_AYCGquPHHrbUa0k4umSJVB9sEh9TEUM-zZgjKk6BD1ty3Q&oe=676AF3A0"
    ];



    return (
        <div className="relative min-h-screen text-white ">

        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-8">Instruments</h1>
            <Album title="Band Photos" images={allowedBandLinks} links={allowedBandLinks} />
            <Album title="Instruments" images={allowedInstrumentLinks} links={allowedInstrumentLinks} />
            <Album title="Events" images={allowedEventLinks} links={allowedEventLinks} />
        </div>

        </div>
    );
}
