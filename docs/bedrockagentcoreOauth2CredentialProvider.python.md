# `bedrockagentcoreOauth2CredentialProvider` Submodule <a name="`bedrockagentcoreOauth2CredentialProvider` Submodule" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOauth2CredentialProvider <a name="BedrockagentcoreOauth2CredentialProvider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider aws_bedrockagentcore_oauth2_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential_provider_vendor: str,
  name: str,
  oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.credentialProviderVendor">credential_provider_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.oauth2ProviderConfig">oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]</code> | oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `credential_provider_vendor`<sup>Required</sup> <a name="credential_provider_vendor" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.credentialProviderVendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}.

---

##### `oauth2_provider_config`<sup>Optional</sup> <a name="oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.oauth2ProviderConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]

oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#oauth2_provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#region BedrockagentcoreOauth2CredentialProvider#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig">put_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOauth2ProviderConfig">reset_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_oauth2_provider_config` <a name="put_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig"></a>

```python
def put_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]

---

##### `reset_oauth2_provider_config` <a name="reset_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOauth2ProviderConfig"></a>

```python
def reset_oauth2_provider_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BedrockagentcoreOauth2CredentialProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BedrockagentcoreOauth2CredentialProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreOauth2CredentialProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreOauth2CredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOauth2CredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.clientSecretArn">client_secret_arn</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList">BedrockagentcoreOauth2CredentialProviderClientSecretArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfig">oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendorInput">credential_provider_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfigInput">oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendor">credential_provider_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_secret_arn`<sup>Required</sup> <a name="client_secret_arn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.clientSecretArn"></a>

```python
client_secret_arn: BedrockagentcoreOauth2CredentialProviderClientSecretArnList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList">BedrockagentcoreOauth2CredentialProviderClientSecretArnList</a>

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `oauth2_provider_config`<sup>Required</sup> <a name="oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfig"></a>

```python
oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList</a>

---

##### `credential_provider_vendor_input`<sup>Optional</sup> <a name="credential_provider_vendor_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendorInput"></a>

```python
credential_provider_vendor_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth2_provider_config_input`<sup>Optional</sup> <a name="oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfigInput"></a>

```python
oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `credential_provider_vendor`<sup>Required</sup> <a name="credential_provider_vendor" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendor"></a>

```python
credential_provider_vendor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOauth2CredentialProviderClientSecretArn <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn()
```


### BedrockagentcoreOauth2CredentialProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential_provider_vendor: str,
  name: str,
  oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.credentialProviderVendor">credential_provider_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.oauth2ProviderConfig">oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]</code> | oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `credential_provider_vendor`<sup>Required</sup> <a name="credential_provider_vendor" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.credentialProviderVendor"></a>

```python
credential_provider_vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}.

---

##### `oauth2_provider_config`<sup>Optional</sup> <a name="oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.oauth2ProviderConfig"></a>

```python
oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]

oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#oauth2_provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#region BedrockagentcoreOauth2CredentialProvider#region}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig(
  custom_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig] = None,
  github_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig] = None,
  google_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig] = None,
  microsoft_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig] = None,
  salesforce_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig] = None,
  slack_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.customOauth2ProviderConfig">custom_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]</code> | custom_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.githubOauth2ProviderConfig">github_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]</code> | github_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.googleOauth2ProviderConfig">google_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]</code> | google_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.microsoftOauth2ProviderConfig">microsoft_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]</code> | microsoft_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.salesforceOauth2ProviderConfig">salesforce_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]</code> | salesforce_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.slackOauth2ProviderConfig">slack_oauth2_provider_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]</code> | slack_oauth2_provider_config block. |

---

##### `custom_oauth2_provider_config`<sup>Optional</sup> <a name="custom_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.customOauth2ProviderConfig"></a>

```python
custom_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]

custom_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#custom_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#custom_oauth2_provider_config}

---

##### `github_oauth2_provider_config`<sup>Optional</sup> <a name="github_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.githubOauth2ProviderConfig"></a>

```python
github_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]

github_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#github_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#github_oauth2_provider_config}

---

##### `google_oauth2_provider_config`<sup>Optional</sup> <a name="google_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.googleOauth2ProviderConfig"></a>

```python
google_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]

google_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#google_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#google_oauth2_provider_config}

---

##### `microsoft_oauth2_provider_config`<sup>Optional</sup> <a name="microsoft_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.microsoftOauth2ProviderConfig"></a>

```python
microsoft_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]

microsoft_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#microsoft_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#microsoft_oauth2_provider_config}

---

##### `salesforce_oauth2_provider_config`<sup>Optional</sup> <a name="salesforce_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.salesforceOauth2ProviderConfig"></a>

```python
salesforce_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]

salesforce_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#salesforce_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#salesforce_oauth2_provider_config}

---

##### `slack_oauth2_provider_config`<sup>Optional</sup> <a name="slack_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.slackOauth2ProviderConfig"></a>

```python
slack_oauth2_provider_config: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]

slack_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#slack_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#slack_oauth2_provider_config}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None,
  oauth_discovery: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.oauthDiscovery">oauth_discovery</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]</code> | oauth_discovery block. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

##### `oauth_discovery`<sup>Optional</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.oauthDiscovery"></a>

```python
oauth_discovery: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]

oauth_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth_discovery BedrockagentcoreOauth2CredentialProvider#oauth_discovery}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery(
  authorization_server_metadata: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata] = None,
  discovery_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]</code> | authorization_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#discovery_url BedrockagentcoreOauth2CredentialProvider#discovery_url}. |

---

##### `authorization_server_metadata`<sup>Optional</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]

authorization_server_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_server_metadata BedrockagentcoreOauth2CredentialProvider#authorization_server_metadata}

---

##### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#discovery_url BedrockagentcoreOauth2CredentialProvider#discovery_url}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata(
  authorization_endpoint: str,
  issuer: str,
  token_endpoint: str,
  response_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_endpoint BedrockagentcoreOauth2CredentialProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#issuer BedrockagentcoreOauth2CredentialProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#token_endpoint BedrockagentcoreOauth2CredentialProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#response_types BedrockagentcoreOauth2CredentialProvider#response_types}. |

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_endpoint BedrockagentcoreOauth2CredentialProvider#authorization_endpoint}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#issuer BedrockagentcoreOauth2CredentialProvider#issuer}.

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#token_endpoint BedrockagentcoreOauth2CredentialProvider#token_endpoint}.

---

##### `response_types`<sup>Optional</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#response_types BedrockagentcoreOauth2CredentialProvider#response_types}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig(
  client_credentials_wo_version: typing.Union[int, float] = None,
  client_id: str = None,
  client_id_wo: str = None,
  client_secret: str = None,
  client_secret_wo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `client_credentials_wo_version`<sup>Optional</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `client_id_wo`<sup>Optional</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery()
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOauth2CredentialProviderClientSecretArnList <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArnList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn">BedrockagentcoreOauth2CredentialProviderClientSecretArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderClientSecretArn
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn">BedrockagentcoreOauth2CredentialProviderClientSecretArn</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resetResponseTypes">reset_response_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_response_types` <a name="reset_response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resetResponseTypes"></a>

```python
def reset_response_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypesInput">response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `response_types_input`<sup>Optional</sup> <a name="response_types_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypesInput"></a>

```python
response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata">put_authorization_server_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetAuthorizationServerMetadata">reset_authorization_server_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetDiscoveryUrl">reset_discovery_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_server_metadata` <a name="put_authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata"></a>

```python
def put_authorization_server_metadata(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]

---

##### `reset_authorization_server_metadata` <a name="reset_authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetAuthorizationServerMetadata"></a>

```python
def reset_authorization_server_metadata() -> None
```

##### `reset_discovery_url` <a name="reset_discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetDiscoveryUrl"></a>

```python
def reset_discovery_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadataInput">authorization_server_metadata_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `authorization_server_metadata_input`<sup>Optional</sup> <a name="authorization_server_metadata_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadataInput"></a>

```python
authorization_server_metadata_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery">put_oauth_discovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetOauthDiscovery">reset_oauth_discovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth_discovery` <a name="put_oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery"></a>

```python
def put_oauth_discovery(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]

---

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```

##### `reset_oauth_discovery` <a name="reset_oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetOauthDiscovery"></a>

```python
def reset_oauth_discovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscoveryInput">oauth_discovery_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `oauth_discovery_input`<sup>Optional</sup> <a name="oauth_discovery_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscoveryInput"></a>

```python
oauth_discovery_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>]

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig">put_custom_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig">put_github_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig">put_google_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig">put_microsoft_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig">put_salesforce_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig">put_slack_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetCustomOauth2ProviderConfig">reset_custom_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGithubOauth2ProviderConfig">reset_github_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGoogleOauth2ProviderConfig">reset_google_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetMicrosoftOauth2ProviderConfig">reset_microsoft_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSalesforceOauth2ProviderConfig">reset_salesforce_oauth2_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSlackOauth2ProviderConfig">reset_slack_oauth2_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_oauth2_provider_config` <a name="put_custom_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig"></a>

```python
def put_custom_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]

---

##### `put_github_oauth2_provider_config` <a name="put_github_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig"></a>

```python
def put_github_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]

---

##### `put_google_oauth2_provider_config` <a name="put_google_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig"></a>

```python
def put_google_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]

---

##### `put_microsoft_oauth2_provider_config` <a name="put_microsoft_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig"></a>

```python
def put_microsoft_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]

---

##### `put_salesforce_oauth2_provider_config` <a name="put_salesforce_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig"></a>

```python
def put_salesforce_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]

---

##### `put_slack_oauth2_provider_config` <a name="put_slack_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig"></a>

```python
def put_slack_oauth2_provider_config(
  value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]

---

##### `reset_custom_oauth2_provider_config` <a name="reset_custom_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetCustomOauth2ProviderConfig"></a>

```python
def reset_custom_oauth2_provider_config() -> None
```

##### `reset_github_oauth2_provider_config` <a name="reset_github_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGithubOauth2ProviderConfig"></a>

```python
def reset_github_oauth2_provider_config() -> None
```

##### `reset_google_oauth2_provider_config` <a name="reset_google_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGoogleOauth2ProviderConfig"></a>

```python
def reset_google_oauth2_provider_config() -> None
```

##### `reset_microsoft_oauth2_provider_config` <a name="reset_microsoft_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetMicrosoftOauth2ProviderConfig"></a>

```python
def reset_microsoft_oauth2_provider_config() -> None
```

##### `reset_salesforce_oauth2_provider_config` <a name="reset_salesforce_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSalesforceOauth2ProviderConfig"></a>

```python
def reset_salesforce_oauth2_provider_config() -> None
```

##### `reset_slack_oauth2_provider_config` <a name="reset_slack_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSlackOauth2ProviderConfig"></a>

```python
def reset_slack_oauth2_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfig">custom_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfig">github_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfig">google_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfig">microsoft_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfig">salesforce_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfig">slack_oauth2_provider_config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfigInput">custom_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfigInput">github_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfigInput">google_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfigInput">microsoft_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfigInput">salesforce_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfigInput">slack_oauth2_provider_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_oauth2_provider_config`<sup>Required</sup> <a name="custom_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfig"></a>

```python
custom_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList</a>

---

##### `github_oauth2_provider_config`<sup>Required</sup> <a name="github_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfig"></a>

```python
github_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList</a>

---

##### `google_oauth2_provider_config`<sup>Required</sup> <a name="google_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfig"></a>

```python
google_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList</a>

---

##### `microsoft_oauth2_provider_config`<sup>Required</sup> <a name="microsoft_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfig"></a>

```python
microsoft_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList</a>

---

##### `salesforce_oauth2_provider_config`<sup>Required</sup> <a name="salesforce_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfig"></a>

```python
salesforce_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList</a>

---

##### `slack_oauth2_provider_config`<sup>Required</sup> <a name="slack_oauth2_provider_config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfig"></a>

```python
slack_oauth2_provider_config: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList</a>

---

##### `custom_oauth2_provider_config_input`<sup>Optional</sup> <a name="custom_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfigInput"></a>

```python
custom_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>]

---

##### `github_oauth2_provider_config_input`<sup>Optional</sup> <a name="github_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfigInput"></a>

```python
github_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>]

---

##### `google_oauth2_provider_config_input`<sup>Optional</sup> <a name="google_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfigInput"></a>

```python
google_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>]

---

##### `microsoft_oauth2_provider_config_input`<sup>Optional</sup> <a name="microsoft_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfigInput"></a>

```python
microsoft_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>]

---

##### `salesforce_oauth2_provider_config_input`<sup>Optional</sup> <a name="salesforce_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfigInput"></a>

```python
salesforce_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]

---

##### `slack_oauth2_provider_config_input`<sup>Optional</sup> <a name="slack_oauth2_provider_config_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfigInput"></a>

```python
slack_oauth2_provider_config_input: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">authorization_server_metadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_metadata`<sup>Required</sup> <a name="authorization_server_metadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```python
authorization_server_metadata: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import bedrockagentcore_oauth2_credential_provider

bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">reset_client_credentials_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientIdWo">reset_client_id_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_credentials_wo_version` <a name="reset_client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```python
def reset_client_credentials_wo_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_wo` <a name="reset_client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```python
def reset_client_id_wo() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.oauthDiscovery">oauth_discovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">client_credentials_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWoInput">client_id_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">client_credentials_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWo">client_id_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_discovery`<sup>Required</sup> <a name="oauth_discovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```python
oauth_discovery: BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `client_credentials_wo_version_input`<sup>Optional</sup> <a name="client_credentials_wo_version_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```python
client_credentials_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_id_wo_input`<sup>Optional</sup> <a name="client_id_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```python
client_id_wo_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_credentials_wo_version`<sup>Required</sup> <a name="client_credentials_wo_version" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```python
client_credentials_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_wo`<sup>Required</sup> <a name="client_id_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```python
client_id_wo: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>

---



