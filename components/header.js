import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
      <link rel="stylesheet" href="/assets/css/font-awesome-css/all.css" />

      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossOrigin="anonymous"
      />

      <link
        href="/assets/admin/assets/plugins/global/plugins.bundle.css?v=7.0.5"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/assets/admin/assets/css/style.bundle.css?v=7.0.5"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" href="/assets/admin/css/bootstrap.css" />
      <link rel="stylesheet" href="/assets/admin/css/admin.css" />
      <link rel="stylesheet" href="/assets/admin/css/main.css" />
    </Head>
  );
};

export default CustomHead;
