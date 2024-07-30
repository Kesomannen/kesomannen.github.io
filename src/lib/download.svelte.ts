const GISTS_URL =
	'https://gist.githubusercontent.com/Kesomannen/58b4f08009e7b7b5baaea253ebccb94d/raw/e08b3b8bd3070c9e756605586a4219e0b6c0b9db/latest.json';

let latestVersion: string | null = null;

async function getLatestVersion(): Promise<string> {
	if (latestVersion !== null) {
		return latestVersion;
	}

	let response = await fetch(GISTS_URL);
	let data = await response.json();
	let version = data.version as string;

	if (!version) {
		throw new Error('Version not found in response');
	}

	latestVersion = version;
	return version;
}

export type PackageType = 'msi' | 'AppImage' | 'deb' | 'dmg';

export async function getDownloadUrl(packageType: PackageType) {
	let version = await getLatestVersion();

	let fileName: string;
	switch (packageType) {
		case 'msi':
			fileName = `Gale_${version}_x64_en-US.msi`;
			break;

		case 'AppImage':
			fileName = `Gale_${version}_amd64.AppImage`;
			break;

		case 'deb':
			fileName = `Gale_${version}_amd64.deb`;
			break;

		case 'dmg':
			fileName = `Gale_${version}_aarch64.dmg`;
			break;

		default:
			throw new Error('Invalid package type');
	}

	return `https://github.com/Kesomannen/gale/releases/download/${version}/${fileName}`;
}
