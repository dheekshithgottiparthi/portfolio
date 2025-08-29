type Props = {
	title: string;
	issuer: string;
	date?: string;
	credentialUrl?: string;
};

export default function CertificationCard({ title, issuer, date, credentialUrl }: Props) {
	return (
		<article className="card">
			<h3 className="text-base font-semibold">{title}</h3>
			<p className="text-sm text-gray-600 dark:text-gray-400">{issuer}{date ? ` • ${date}` : ''}</p>
			{credentialUrl && (
				<a className="mt-3 inline-flex text-sm text-primary hover:underline" href={credentialUrl} target="_blank" rel="noreferrer">
					View credential →
				</a>
			)}
		</article>
	);
}


