# `opensearchserverlessSecurityConfig` Submodule <a name="`opensearchserverlessSecurityConfig` Submodule" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityConfig <a name="OpensearchserverlessSecurityConfig" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig(
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
  type: str,
  description: str = None,
  iam_federation_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions] = None,
  iam_identity_center_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions] = None,
  region: str = None,
  saml_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of configuration. Valid values: `saml`, `iamidentitycenter` or `iamfederation`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the security configuration. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions">iam_federation_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]</code> | iam_federation_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]</code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions">saml_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | saml_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name"></a>

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type"></a>

- *Type:* str

Type of configuration. Valid values: `saml`, `iamidentitycenter` or `iamfederation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description"></a>

- *Type:* str

Description of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]

iam_federation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#region OpensearchserverlessSecurityConfig#region}

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

saml_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions">put_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions">put_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions">put_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions">reset_iam_federation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions">reset_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions">reset_saml_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_iam_federation_options` <a name="put_iam_federation_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions"></a>

```python
def put_iam_federation_options(
  value: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]

---

##### `put_iam_identity_center_options` <a name="put_iam_identity_center_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions"></a>

```python
def put_iam_identity_center_options(
  value: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]

---

##### `put_saml_options` <a name="put_saml_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions"></a>

```python
def put_saml_options(
  value: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iam_federation_options` <a name="reset_iam_federation_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions"></a>

```python
def reset_iam_federation_options() -> None
```

##### `reset_iam_identity_center_options` <a name="reset_iam_identity_center_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions"></a>

```python
def reset_iam_identity_center_options() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_saml_options` <a name="reset_saml_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions"></a>

```python
def reset_saml_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions">iam_federation_options</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList">OpensearchserverlessSecurityConfigIamFederationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList">OpensearchserverlessSecurityConfigSamlOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput">iam_federation_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput">iam_identity_center_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput">saml_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `iam_federation_options`<sup>Required</sup> <a name="iam_federation_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions"></a>

```python
iam_federation_options: OpensearchserverlessSecurityConfigIamFederationOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList">OpensearchserverlessSecurityConfigIamFederationOptionsList</a>

---

##### `iam_identity_center_options`<sup>Required</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions"></a>

```python
saml_options: OpensearchserverlessSecurityConfigSamlOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList">OpensearchserverlessSecurityConfigSamlOptionsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iam_federation_options_input`<sup>Optional</sup> <a name="iam_federation_options_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput"></a>

```python
iam_federation_options_input: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]

---

##### `iam_identity_center_options_input`<sup>Optional</sup> <a name="iam_identity_center_options_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput"></a>

```python
iam_identity_center_options_input: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `saml_options_input`<sup>Optional</sup> <a name="saml_options_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput"></a>

```python
saml_options_input: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityConfigConfig <a name="OpensearchserverlessSecurityConfigConfig" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  description: str = None,
  iam_federation_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions] = None,
  iam_identity_center_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions] = None,
  region: str = None,
  saml_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name">name</a></code> | <code>str</code> | Name of the policy. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type">type</a></code> | <code>str</code> | Type of configuration. Valid values: `saml`, `iamidentitycenter` or `iamfederation`. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description">description</a></code> | <code>str</code> | Description of the security configuration. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions">iam_federation_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]</code> | iam_federation_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]</code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions">saml_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | saml_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of configuration. Valid values: `saml`, `iamidentitycenter` or `iamfederation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iam_federation_options`<sup>Optional</sup> <a name="iam_federation_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions"></a>

```python
iam_federation_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]

iam_federation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#region OpensearchserverlessSecurityConfig#region}

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions"></a>

```python
saml_options: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

saml_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

### OpensearchserverlessSecurityConfigIamFederationOptions <a name="OpensearchserverlessSecurityConfigIamFederationOptions" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions(
  group_attribute: str = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | User attribute. |

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

User attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigIamIdentityCenterOptions <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions(
  instance_arn: str,
  group_attribute: str = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn">instance_arn</a></code> | <code>str</code> | Instance ARN. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | User attribute. |

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Instance ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#instance_arn OpensearchserverlessSecurityConfig#instance_arn}

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

User attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigSamlOptions <a name="OpensearchserverlessSecurityConfigSamlOptions" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions(
  metadata: str,
  group_attribute: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata">metadata</a></code> | <code>str</code> | The XML IdP metadata file generated from your identity provider. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Group attribute for this SAML integration. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | User attribute for this SAML integration. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

The XML IdP metadata file generated from your identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Group attribute for this SAML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

User attribute for this SAML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessSecurityConfigIamFederationOptionsList <a name="OpensearchserverlessSecurityConfigIamFederationOptionsList" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamFederationOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>]

---


### OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigIamFederationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---


### OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserverlessSecurityConfigIamIdentityCenterOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>]

---


### OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigIamIdentityCenterOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---


### OpensearchserverlessSecurityConfigSamlOptionsList <a name="OpensearchserverlessSecurityConfigSamlOptionsList" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchserverlessSecurityConfigSamlOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchserverlessSecurityConfigSamlOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

---


### OpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="OpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---



