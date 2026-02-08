# `opensearchApplication` Submodule <a name="`opensearchApplication` Submodule" id="@cdktn/provider-aws.opensearchApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchApplication <a name="OpensearchApplication" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application aws_opensearch_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplication(
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
  app_config: IResolvable | typing.List[OpensearchApplicationAppConfig] = None,
  data_source: IResolvable | typing.List[OpensearchApplicationDataSource] = None,
  iam_identity_center_options: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions] = None,
  kms_key_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OpensearchApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.appConfig">app_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]</code> | app_config block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dataSource">data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]</code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}.

---

##### `app_config`<sup>Optional</sup> <a name="app_config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.appConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]

app_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.dataSource"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#region OpensearchApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig">put_app_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions">put_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig">reset_app_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions">reset_iam_identity_center_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_config` <a name="put_app_config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig"></a>

```python
def put_app_config(
  value: IResolvable | typing.List[OpensearchApplicationAppConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]

---

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource"></a>

```python
def put_data_source(
  value: IResolvable | typing.List[OpensearchApplicationDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]

---

##### `put_iam_identity_center_options` <a name="put_iam_identity_center_options" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions"></a>

```python
def put_iam_identity_center_options(
  value: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#create OpensearchApplication#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#delete OpensearchApplication#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#update OpensearchApplication#update}

---

##### `reset_app_config` <a name="reset_app_config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig"></a>

```python
def reset_app_config() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_iam_identity_center_options` <a name="reset_iam_identity_center_options" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions"></a>

```python
def reset_iam_identity_center_options() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpensearchApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpensearchApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig">app_config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput">app_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput">data_source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput">iam_identity_center_options_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `app_config`<sup>Required</sup> <a name="app_config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig"></a>

```python
app_config: OpensearchApplicationAppConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource"></a>

```python
data_source: OpensearchApplicationDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `iam_identity_center_options`<sup>Required</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: OpensearchApplicationIamIdentityCenterOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts"></a>

```python
timeouts: OpensearchApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a>

---

##### `app_config_input`<sup>Optional</sup> <a name="app_config_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput"></a>

```python
app_config_input: IResolvable | typing.List[OpensearchApplicationAppConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | typing.List[OpensearchApplicationDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]

---

##### `iam_identity_center_options_input`<sup>Optional</sup> <a name="iam_identity_center_options_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput"></a>

```python
iam_identity_center_options_input: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OpensearchApplicationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchApplicationAppConfig <a name="OpensearchApplicationAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationAppConfig(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#key OpensearchApplication#key}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#value OpensearchApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#key OpensearchApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#value OpensearchApplication#value}.

---

### OpensearchApplicationConfig <a name="OpensearchApplicationConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  app_config: IResolvable | typing.List[OpensearchApplicationAppConfig] = None,
  data_source: IResolvable | typing.List[OpensearchApplicationDataSource] = None,
  iam_identity_center_options: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions] = None,
  kms_key_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OpensearchApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig">app_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]</code> | app_config block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource">data_source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions">iam_identity_center_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]</code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}.

---

##### `app_config`<sup>Optional</sup> <a name="app_config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig"></a>

```python
app_config: IResolvable | typing.List[OpensearchApplicationAppConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]

app_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource"></a>

```python
data_source: IResolvable | typing.List[OpensearchApplicationDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}

---

##### `iam_identity_center_options`<sup>Optional</sup> <a name="iam_identity_center_options" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions"></a>

```python
iam_identity_center_options: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#region OpensearchApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts"></a>

```python
timeouts: OpensearchApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}

---

### OpensearchApplicationDataSource <a name="OpensearchApplicationDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationDataSource(
  data_source_arn: str = None,
  data_source_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription">data_source_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}. |

---

##### `data_source_arn`<sup>Optional</sup> <a name="data_source_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}.

---

##### `data_source_description`<sup>Optional</sup> <a name="data_source_description" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription"></a>

```python
data_source_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}.

---

### OpensearchApplicationIamIdentityCenterOptions <a name="OpensearchApplicationIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationIamIdentityCenterOptions(
  enabled: bool | IResolvable = None,
  iam_identity_center_instance_arn: str = None,
  iam_role_for_identity_center_application_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">iam_identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">iam_role_for_identity_center_application_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}.

---

##### `iam_identity_center_instance_arn`<sup>Optional</sup> <a name="iam_identity_center_instance_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```python
iam_identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}.

---

##### `iam_role_for_identity_center_application_arn`<sup>Optional</sup> <a name="iam_role_for_identity_center_application_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```python
iam_role_for_identity_center_application_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}.

---

### OpensearchApplicationTimeouts <a name="OpensearchApplicationTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#create OpensearchApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#delete OpensearchApplication#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#update OpensearchApplication#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchApplicationAppConfigList <a name="OpensearchApplicationAppConfigList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationAppConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchApplicationAppConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchApplicationAppConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>]

---


### OpensearchApplicationAppConfigOutputReference <a name="OpensearchApplicationAppConfigOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationAppConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchApplicationAppConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig">OpensearchApplicationAppConfig</a>

---


### OpensearchApplicationDataSourceList <a name="OpensearchApplicationDataSourceList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchApplicationDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchApplicationDataSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>]

---


### OpensearchApplicationDataSourceOutputReference <a name="OpensearchApplicationDataSourceOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn">reset_data_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription">reset_data_source_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_source_arn` <a name="reset_data_source_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn"></a>

```python
def reset_data_source_arn() -> None
```

##### `reset_data_source_description` <a name="reset_data_source_description" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription"></a>

```python
def reset_data_source_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput">data_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput">data_source_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription">data_source_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_source_arn_input`<sup>Optional</sup> <a name="data_source_arn_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput"></a>

```python
data_source_arn_input: str
```

- *Type:* str

---

##### `data_source_description_input`<sup>Optional</sup> <a name="data_source_description_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput"></a>

```python
data_source_description_input: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `data_source_description`<sup>Required</sup> <a name="data_source_description" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription"></a>

```python
data_source_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchApplicationDataSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource">OpensearchApplicationDataSource</a>

---


### OpensearchApplicationIamIdentityCenterOptionsList <a name="OpensearchApplicationIamIdentityCenterOptionsList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchApplicationIamIdentityCenterOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchApplicationIamIdentityCenterOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>]

---


### OpensearchApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">reset_iam_identity_center_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">reset_iam_role_for_identity_center_application_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_iam_identity_center_instance_arn` <a name="reset_iam_identity_center_instance_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```python
def reset_iam_identity_center_instance_arn() -> None
```

##### `reset_iam_role_for_identity_center_application_arn` <a name="reset_iam_role_for_identity_center_application_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```python
def reset_iam_role_for_identity_center_application_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn">iam_identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">iam_identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">iam_role_for_identity_center_application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">iam_identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">iam_role_for_identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_identity_center_application_arn`<sup>Required</sup> <a name="iam_identity_center_application_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn"></a>

```python
iam_identity_center_application_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `iam_identity_center_instance_arn_input`<sup>Optional</sup> <a name="iam_identity_center_instance_arn_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```python
iam_identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `iam_role_for_identity_center_application_arn_input`<sup>Optional</sup> <a name="iam_role_for_identity_center_application_arn_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```python
iam_role_for_identity_center_application_arn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `iam_identity_center_instance_arn`<sup>Required</sup> <a name="iam_identity_center_instance_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```python
iam_identity_center_instance_arn: str
```

- *Type:* str

---

##### `iam_role_for_identity_center_application_arn`<sup>Required</sup> <a name="iam_role_for_identity_center_application_arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```python
iam_role_for_identity_center_application_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchApplicationIamIdentityCenterOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions">OpensearchApplicationIamIdentityCenterOptions</a>

---


### OpensearchApplicationTimeoutsOutputReference <a name="OpensearchApplicationTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import opensearch_application

opensearchApplication.OpensearchApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchApplicationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---



