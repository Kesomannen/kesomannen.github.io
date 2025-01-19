<div class="flex flex-col w-full max-w-[65rem] mx-auto py-20 px-8 text-white relative">
	<h1>Privacy Policy</h1>

	<p><strong>Effective Date:</strong> 2025-01-09</p>

	<p>
		This Privacy Policy outlines how we collect, use, and protect your personal data when you use
		our application. By accessing or using the app, you consent to the collection and use of your
		data as described in this policy.
	</p>

	<h2>Data Collection</h2>
	<ul>
		<li>
			Each user is assigned a unique, randomly generated UUID (Universally Unique Identifier), which
			is stored locally on the user's device.
		</li>
		<li>
			Upon launching the app, a single POST request is made to our Supabase server, located in
			Germany. This request records the user's UUID and the timestamp of when the app was started in
			our PostgreSQL database.
		</li>
	</ul>

	<h2>Data Storage</h2>
	<ul>
		<li>
			The UUID and timestamp are stored in a PostgreSQL database hosted on Supabase servers located
			in Germany.
		</li>
		<li>The data is used exclusively for telemetry purposes to track app usage.</li>
	</ul>

	<h2>User Control</h2>
	<ul>
		<li>
			You can disable telemetry data collection at any time via the app’s settings. Once disabled,
			no further data will be transmitted.
		</li>
	</ul>

	<h2>Data Security</h2>
	<p>
		We employ appropriate security measures to protect your data; however, no system can be entirely
		secure.
	</p>

	<h2>Changes to This Policy</h2>
	<p>
		This privacy policy is version-specific. By updating to a new version of the app, you
		acknowledge and accept that the terms of the privacy policy may have changed. Any updates will
		be reflected in the version-specific documentation, and users are encouraged to review the
		policy after each update.
	</p>

	<h2>Contact Information</h2>
	<p>
		For any questions or concerns regarding this privacy policy, please contact us at
		bobbo.nidor@gmail.com.
	</p>
</div>

<style>
	h1 {
		@apply text-4xl font-bold mb-4;
	}

	h2 {
		@apply text-xl font-semibold mt-4 mb-1;
	}

	ul {
		@apply list-disc;
	}

	li {
		@apply ml-4 pl-1;
	}
</style>
