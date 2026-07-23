# `bedrockagentcoreBrowser` Submodule <a name="`bedrockagentcoreBrowser` Submodule" id="@cdktn/provider-aws.bedrockagentcoreBrowser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowser <a name="BedrockagentcoreBrowser" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser aws_bedrockagentcore_browser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  browser_signing: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning] = None,
  certificate: IResolvable | typing.List[BedrockagentcoreBrowserCertificate] = None,
  description: str = None,
  enterprise_policy: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy] = None,
  execution_role_arn: str = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration] = None,
  recording: IResolvable | typing.List[BedrockagentcoreBrowserRecording] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreBrowserTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.browserSigning">browser_signing</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]</code> | browser_signing block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.certificate">certificate</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]</code> | certificate block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.enterprisePolicy">enterprise_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]</code> | enterprise_policy block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.recording">recording</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]</code> | recording block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}.

---

##### `browser_signing`<sup>Optional</sup> <a name="browser_signing" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.browserSigning"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]

browser_signing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#browser_signing BedrockagentcoreBrowser#browser_signing}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.certificate"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#certificate BedrockagentcoreBrowser#certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}.

---

##### `enterprise_policy`<sup>Optional</sup> <a name="enterprise_policy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.enterprisePolicy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]

enterprise_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enterprise_policy BedrockagentcoreBrowser#enterprise_policy}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.networkConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#network_configuration BedrockagentcoreBrowser#network_configuration}

---

##### `recording`<sup>Optional</sup> <a name="recording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.recording"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]

recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#recording BedrockagentcoreBrowser#recording}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#region BedrockagentcoreBrowser#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#timeouts BedrockagentcoreBrowser#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putBrowserSigning">put_browser_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putEnterprisePolicy">put_enterprise_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording">put_recording</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetBrowserSigning">reset_browser_signing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetEnterprisePolicy">reset_enterprise_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording">reset_recording</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_browser_signing` <a name="put_browser_signing" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putBrowserSigning"></a>

```python
def put_browser_signing(
  value: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putBrowserSigning.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]

---

##### `put_certificate` <a name="put_certificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putCertificate"></a>

```python
def put_certificate(
  value: IResolvable | typing.List[BedrockagentcoreBrowserCertificate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putCertificate.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]

---

##### `put_enterprise_policy` <a name="put_enterprise_policy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putEnterprisePolicy"></a>

```python
def put_enterprise_policy(
  value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putEnterprisePolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  value: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]

---

##### `put_recording` <a name="put_recording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording"></a>

```python
def put_recording(
  value: IResolvable | typing.List[BedrockagentcoreBrowserRecording]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#create BedrockagentcoreBrowser#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#delete BedrockagentcoreBrowser#delete}

---

##### `reset_browser_signing` <a name="reset_browser_signing" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetBrowserSigning"></a>

```python
def reset_browser_signing() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enterprise_policy` <a name="reset_enterprise_policy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetEnterprisePolicy"></a>

```python
def reset_enterprise_policy() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_recording` <a name="reset_recording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording"></a>

```python
def reset_recording() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreBrowser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreBrowser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreBrowser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreBrowser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn">browser_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId">browser_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserSigning">browser_signing</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList">BedrockagentcoreBrowserBrowserSigningList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList">BedrockagentcoreBrowserCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.enterprisePolicy">enterprise_policy</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList">BedrockagentcoreBrowserEnterprisePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording">recording</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserSigningInput">browser_signing_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.certificateInput">certificate_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.enterprisePolicyInput">enterprise_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput">recording_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `browser_arn`<sup>Required</sup> <a name="browser_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn"></a>

```python
browser_arn: str
```

- *Type:* str

---

##### `browser_id`<sup>Required</sup> <a name="browser_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId"></a>

```python
browser_id: str
```

- *Type:* str

---

##### `browser_signing`<sup>Required</sup> <a name="browser_signing" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserSigning"></a>

```python
browser_signing: BedrockagentcoreBrowserBrowserSigningList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList">BedrockagentcoreBrowserBrowserSigningList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.certificate"></a>

```python
certificate: BedrockagentcoreBrowserCertificateList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList">BedrockagentcoreBrowserCertificateList</a>

---

##### `enterprise_policy`<sup>Required</sup> <a name="enterprise_policy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.enterprisePolicy"></a>

```python
enterprise_policy: BedrockagentcoreBrowserEnterprisePolicyList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList">BedrockagentcoreBrowserEnterprisePolicyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration"></a>

```python
network_configuration: BedrockagentcoreBrowserNetworkConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a>

---

##### `recording`<sup>Required</sup> <a name="recording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording"></a>

```python
recording: BedrockagentcoreBrowserRecordingList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts"></a>

```python
timeouts: BedrockagentcoreBrowserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a>

---

##### `browser_signing_input`<sup>Optional</sup> <a name="browser_signing_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserSigningInput"></a>

```python
browser_signing_input: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.certificateInput"></a>

```python
certificate_input: IResolvable | typing.List[BedrockagentcoreBrowserCertificate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enterprise_policy_input`<sup>Optional</sup> <a name="enterprise_policy_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.enterprisePolicyInput"></a>

```python
enterprise_policy_input: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]

---

##### `recording_input`<sup>Optional</sup> <a name="recording_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput"></a>

```python
recording_input: IResolvable | typing.List[BedrockagentcoreBrowserRecording]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BedrockagentcoreBrowserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserBrowserSigning <a name="BedrockagentcoreBrowserBrowserSigning" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning(
  enabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}.

---

### BedrockagentcoreBrowserCertificate <a name="BedrockagentcoreBrowserCertificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate(
  location: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate.property.location">location</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]</code> | location block. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate.property.location"></a>

```python
location: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#location BedrockagentcoreBrowser#location}

---

### BedrockagentcoreBrowserCertificateLocation <a name="BedrockagentcoreBrowserCertificateLocation" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation(
  secrets_manager: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocationSecretsManager] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation.property.secretsManager">secrets_manager</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]</code> | secrets_manager block. |

---

##### `secrets_manager`<sup>Optional</sup> <a name="secrets_manager" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation.property.secretsManager"></a>

```python
secrets_manager: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocationSecretsManager]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]

secrets_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#secrets_manager BedrockagentcoreBrowser#secrets_manager}

---

### BedrockagentcoreBrowserCertificateLocationSecretsManager <a name="BedrockagentcoreBrowserCertificateLocationSecretsManager" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager(
  secret_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#secret_arn BedrockagentcoreBrowser#secret_arn}. |

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#secret_arn BedrockagentcoreBrowser#secret_arn}.

---

### BedrockagentcoreBrowserConfig <a name="BedrockagentcoreBrowserConfig" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  browser_signing: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning] = None,
  certificate: IResolvable | typing.List[BedrockagentcoreBrowserCertificate] = None,
  description: str = None,
  enterprise_policy: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy] = None,
  execution_role_arn: str = None,
  network_configuration: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration] = None,
  recording: IResolvable | typing.List[BedrockagentcoreBrowserRecording] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BedrockagentcoreBrowserTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.browserSigning">browser_signing</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]</code> | browser_signing block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.certificate">certificate</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]</code> | certificate block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.enterprisePolicy">enterprise_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]</code> | enterprise_policy block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration">network_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]</code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording">recording</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]</code> | recording block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}.

---

##### `browser_signing`<sup>Optional</sup> <a name="browser_signing" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.browserSigning"></a>

```python
browser_signing: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]

browser_signing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#browser_signing BedrockagentcoreBrowser#browser_signing}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.certificate"></a>

```python
certificate: IResolvable | typing.List[BedrockagentcoreBrowserCertificate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#certificate BedrockagentcoreBrowser#certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}.

---

##### `enterprise_policy`<sup>Optional</sup> <a name="enterprise_policy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.enterprisePolicy"></a>

```python
enterprise_policy: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]

enterprise_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enterprise_policy BedrockagentcoreBrowser#enterprise_policy}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration"></a>

```python
network_configuration: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#network_configuration BedrockagentcoreBrowser#network_configuration}

---

##### `recording`<sup>Optional</sup> <a name="recording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording"></a>

```python
recording: IResolvable | typing.List[BedrockagentcoreBrowserRecording]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]

recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#recording BedrockagentcoreBrowser#recording}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#region BedrockagentcoreBrowser#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts"></a>

```python
timeouts: BedrockagentcoreBrowserTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#timeouts BedrockagentcoreBrowser#timeouts}

---

### BedrockagentcoreBrowserEnterprisePolicy <a name="BedrockagentcoreBrowserEnterprisePolicy" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy(
  location: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocation] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy.property.location">location</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]</code> | location block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#type BedrockagentcoreBrowser#type}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy.property.location"></a>

```python
location: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#location BedrockagentcoreBrowser#location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#type BedrockagentcoreBrowser#type}.

---

### BedrockagentcoreBrowserEnterprisePolicyLocation <a name="BedrockagentcoreBrowserEnterprisePolicyLocation" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation(
  s3: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocationS3] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation.property.s3">s3</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation.property.s3"></a>

```python
s3: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocationS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#s3 BedrockagentcoreBrowser#s3}

---

### BedrockagentcoreBrowserEnterprisePolicyLocationS3 <a name="BedrockagentcoreBrowserEnterprisePolicyLocationS3" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3(
  bucket: str,
  prefix: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#version_id BedrockagentcoreBrowser#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#version_id BedrockagentcoreBrowser#version_id}.

---

### BedrockagentcoreBrowserNetworkConfiguration <a name="BedrockagentcoreBrowserNetworkConfiguration" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration(
  network_mode: str,
  vpc_config: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfigurationVpcConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.vpcConfig">vpc_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]</code> | vpc_config block. |

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.vpcConfig"></a>

```python
vpc_config: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfigurationVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#vpc_config BedrockagentcoreBrowser#vpc_config}

---

### BedrockagentcoreBrowserNetworkConfigurationVpcConfig <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfig" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig(
  security_groups: typing.List[str],
  subnets: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}. |

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}.

---

### BedrockagentcoreBrowserRecording <a name="BedrockagentcoreBrowserRecording" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording(
  enabled: bool | IResolvable = None,
  s3_location: IResolvable | typing.List[BedrockagentcoreBrowserRecordingS3Location] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location">s3_location</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]</code> | s3_location block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}.

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location"></a>

```python
s3_location: IResolvable | typing.List[BedrockagentcoreBrowserRecordingS3Location]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]

s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#s3_location BedrockagentcoreBrowser#s3_location}

---

### BedrockagentcoreBrowserRecordingS3Location <a name="BedrockagentcoreBrowserRecordingS3Location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location(
  bucket: str,
  prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}.

---

### BedrockagentcoreBrowserTimeouts <a name="BedrockagentcoreBrowserTimeouts" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#create BedrockagentcoreBrowser#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/bedrockagentcore_browser#delete BedrockagentcoreBrowser#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserBrowserSigningList <a name="BedrockagentcoreBrowserBrowserSigningList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserBrowserSigningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserBrowserSigning]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>]

---


### BedrockagentcoreBrowserBrowserSigningOutputReference <a name="BedrockagentcoreBrowserBrowserSigningOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigningOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserBrowserSigning
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserBrowserSigning">BedrockagentcoreBrowserBrowserSigning</a>

---


### BedrockagentcoreBrowserCertificateList <a name="BedrockagentcoreBrowserCertificateList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserCertificate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>]

---


### BedrockagentcoreBrowserCertificateLocationList <a name="BedrockagentcoreBrowserCertificateLocationList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserCertificateLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]

---


### BedrockagentcoreBrowserCertificateLocationOutputReference <a name="BedrockagentcoreBrowserCertificateLocationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.putSecretsManager">put_secrets_manager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.resetSecretsManager">reset_secrets_manager</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secrets_manager` <a name="put_secrets_manager" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.putSecretsManager"></a>

```python
def put_secrets_manager(
  value: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocationSecretsManager]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]

---

##### `reset_secrets_manager` <a name="reset_secrets_manager" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.resetSecretsManager"></a>

```python
def reset_secrets_manager() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList">BedrockagentcoreBrowserCertificateLocationSecretsManagerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.secretsManagerInput">secrets_manager_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.secretsManager"></a>

```python
secrets_manager: BedrockagentcoreBrowserCertificateLocationSecretsManagerList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList">BedrockagentcoreBrowserCertificateLocationSecretsManagerList</a>

---

##### `secrets_manager_input`<sup>Optional</sup> <a name="secrets_manager_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.secretsManagerInput"></a>

```python
secrets_manager_input: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocationSecretsManager]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserCertificateLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>

---


### BedrockagentcoreBrowserCertificateLocationSecretsManagerList <a name="BedrockagentcoreBrowserCertificateLocationSecretsManagerList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocationSecretsManager]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>]

---


### BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference <a name="BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserCertificateLocationSecretsManager
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationSecretsManager">BedrockagentcoreBrowserCertificateLocationSecretsManager</a>

---


### BedrockagentcoreBrowserCertificateOutputReference <a name="BedrockagentcoreBrowserCertificateOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.putLocation"></a>

```python
def put_location(
  value: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.putLocation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList">BedrockagentcoreBrowserCertificateLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.location"></a>

```python
location: BedrockagentcoreBrowserCertificateLocationList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocationList">BedrockagentcoreBrowserCertificateLocationList</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | typing.List[BedrockagentcoreBrowserCertificateLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateLocation">BedrockagentcoreBrowserCertificateLocation</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserCertificate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserCertificate">BedrockagentcoreBrowserCertificate</a>

---


### BedrockagentcoreBrowserEnterprisePolicyList <a name="BedrockagentcoreBrowserEnterprisePolicyList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserEnterprisePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>]

---


### BedrockagentcoreBrowserEnterprisePolicyLocationList <a name="BedrockagentcoreBrowserEnterprisePolicyLocationList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]

---


### BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference <a name="BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.putS3"></a>

```python
def put_s3(
  value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocationS3]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.putS3.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List">BedrockagentcoreBrowserEnterprisePolicyLocationS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.s3"></a>

```python
s3: BedrockagentcoreBrowserEnterprisePolicyLocationS3List
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List">BedrockagentcoreBrowserEnterprisePolicyLocationS3List</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocationS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserEnterprisePolicyLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>

---


### BedrockagentcoreBrowserEnterprisePolicyLocationS3List <a name="BedrockagentcoreBrowserEnterprisePolicyLocationS3List" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3List.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocationS3]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>]

---


### BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference <a name="BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserEnterprisePolicyLocationS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationS3">BedrockagentcoreBrowserEnterprisePolicyLocationS3</a>

---


### BedrockagentcoreBrowserEnterprisePolicyOutputReference <a name="BedrockagentcoreBrowserEnterprisePolicyOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.putLocation"></a>

```python
def put_location(
  value: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.putLocation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList">BedrockagentcoreBrowserEnterprisePolicyLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.location"></a>

```python
location: BedrockagentcoreBrowserEnterprisePolicyLocationList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocationList">BedrockagentcoreBrowserEnterprisePolicyLocationList</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | typing.List[BedrockagentcoreBrowserEnterprisePolicyLocation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyLocation">BedrockagentcoreBrowserEnterprisePolicyLocation</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserEnterprisePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserEnterprisePolicy">BedrockagentcoreBrowserEnterprisePolicy</a>

---


### BedrockagentcoreBrowserNetworkConfigurationList <a name="BedrockagentcoreBrowserNetworkConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>]

---


### BedrockagentcoreBrowserNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  value: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfigurationVpcConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]

---

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList">BedrockagentcoreBrowserNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfig"></a>

```python
vpc_config: BedrockagentcoreBrowserNetworkConfigurationVpcConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList">BedrockagentcoreBrowserNetworkConfigurationVpcConfigList</a>

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfigurationVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>

---


### BedrockagentcoreBrowserNetworkConfigurationVpcConfigList <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfigList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserNetworkConfigurationVpcConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>]

---


### BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreBrowserRecordingList <a name="BedrockagentcoreBrowserRecordingList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserRecordingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserRecording]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>]

---


### BedrockagentcoreBrowserRecordingOutputReference <a name="BedrockagentcoreBrowserRecordingOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location"></a>

```python
def put_s3_location(
  value: IResolvable | typing.List[BedrockagentcoreBrowserRecordingS3Location]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location"></a>

```python
s3_location: BedrockagentcoreBrowserRecordingS3LocationList
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | typing.List[BedrockagentcoreBrowserRecordingS3Location]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserRecording
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>

---


### BedrockagentcoreBrowserRecordingS3LocationList <a name="BedrockagentcoreBrowserRecordingS3LocationList" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreBrowserRecordingS3LocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreBrowserRecordingS3Location]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>]

---


### BedrockagentcoreBrowserRecordingS3LocationOutputReference <a name="BedrockagentcoreBrowserRecordingS3LocationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserRecordingS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>

---


### BedrockagentcoreBrowserTimeoutsOutputReference <a name="BedrockagentcoreBrowserTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import bedrockagentcore_browser

bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreBrowserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---



