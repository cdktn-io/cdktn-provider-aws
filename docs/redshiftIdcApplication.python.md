# `redshiftIdcApplication` Submodule <a name="`redshiftIdcApplication` Submodule" id="@cdktn/provider-aws.redshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIdcApplication <a name="RedshiftIdcApplication" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application aws_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iam_role_arn: str,
  idc_display_name: str,
  idc_instance_arn: str,
  redshift_idc_application_name: str,
  application_type: str = None,
  authorized_token_issuer: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer] = None,
  identity_namespace: str = None,
  region: str = None,
  service_integration: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcDisplayName">idc_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName">redshift_idc_application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuer">authorized_token_issuer</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]</code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.identityNamespace">identity_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.serviceIntegration">service_integration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]</code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `idc_display_name`<sup>Required</sup> <a name="idc_display_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `redshift_idc_application_name`<sup>Required</sup> <a name="redshift_idc_application_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `application_type`<sup>Optional</sup> <a name="application_type" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.applicationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `authorized_token_issuer`<sup>Optional</sup> <a name="authorized_token_issuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuer"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `identity_namespace`<sup>Optional</sup> <a name="identity_namespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.identityNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `service_integration`<sup>Optional</sup> <a name="service_integration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.serviceIntegration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer">put_authorized_token_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration">put_service_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType">reset_application_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer">reset_authorized_token_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace">reset_identity_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration">reset_service_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorized_token_issuer` <a name="put_authorized_token_issuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer"></a>

```python
def put_authorized_token_issuer(
  value: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]

---

##### `put_service_integration` <a name="put_service_integration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration"></a>

```python
def put_service_integration(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]

---

##### `reset_application_type` <a name="reset_application_type" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType"></a>

```python
def reset_application_type() -> None
```

##### `reset_authorized_token_issuer` <a name="reset_authorized_token_issuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer"></a>

```python
def reset_authorized_token_issuer() -> None
```

##### `reset_identity_namespace` <a name="reset_identity_namespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace"></a>

```python
def reset_identity_namespace() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_integration` <a name="reset_service_integration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration"></a>

```python
def reset_service_integration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftIdcApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer">authorized_token_issuer</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn">idc_managed_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn">redshift_idc_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration">service_integration</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput">application_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput">authorized_token_issuer_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput">idc_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput">idc_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput">identity_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput">redshift_idc_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput">service_integration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName">idc_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace">identity_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName">redshift_idc_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authorized_token_issuer`<sup>Required</sup> <a name="authorized_token_issuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer"></a>

```python
authorized_token_issuer: RedshiftIdcApplicationAuthorizedTokenIssuerList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a>

---

##### `idc_managed_application_arn`<sup>Required</sup> <a name="idc_managed_application_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```python
idc_managed_application_arn: str
```

- *Type:* str

---

##### `redshift_idc_application_arn`<sup>Required</sup> <a name="redshift_idc_application_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```python
redshift_idc_application_arn: str
```

- *Type:* str

---

##### `service_integration`<sup>Required</sup> <a name="service_integration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration"></a>

```python
service_integration: RedshiftIdcApplicationServiceIntegrationList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `application_type_input`<sup>Optional</sup> <a name="application_type_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput"></a>

```python
application_type_input: str
```

- *Type:* str

---

##### `authorized_token_issuer_input`<sup>Optional</sup> <a name="authorized_token_issuer_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput"></a>

```python
authorized_token_issuer_input: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `idc_display_name_input`<sup>Optional</sup> <a name="idc_display_name_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput"></a>

```python
idc_display_name_input: str
```

- *Type:* str

---

##### `idc_instance_arn_input`<sup>Optional</sup> <a name="idc_instance_arn_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput"></a>

```python
idc_instance_arn_input: str
```

- *Type:* str

---

##### `identity_namespace_input`<sup>Optional</sup> <a name="identity_namespace_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput"></a>

```python
identity_namespace_input: str
```

- *Type:* str

---

##### `redshift_idc_application_name_input`<sup>Optional</sup> <a name="redshift_idc_application_name_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```python
redshift_idc_application_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_integration_input`<sup>Optional</sup> <a name="service_integration_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput"></a>

```python
service_integration_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `idc_display_name`<sup>Required</sup> <a name="idc_display_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName"></a>

```python
idc_display_name: str
```

- *Type:* str

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

---

##### `identity_namespace`<sup>Required</sup> <a name="identity_namespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace"></a>

```python
identity_namespace: str
```

- *Type:* str

---

##### `redshift_idc_application_name`<sup>Required</sup> <a name="redshift_idc_application_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```python
redshift_idc_application_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuer <a name="RedshiftIdcApplicationAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer(
  authorized_audiences_list: typing.List[str] = None,
  trusted_token_issuer_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList">authorized_audiences_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn">trusted_token_issuer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}. |

---

##### `authorized_audiences_list`<sup>Optional</sup> <a name="authorized_audiences_list" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList"></a>

```python
authorized_audiences_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}.

---

##### `trusted_token_issuer_arn`<sup>Optional</sup> <a name="trusted_token_issuer_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn"></a>

```python
trusted_token_issuer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}.

---

### RedshiftIdcApplicationConfig <a name="RedshiftIdcApplicationConfig" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iam_role_arn: str,
  idc_display_name: str,
  idc_instance_arn: str,
  redshift_idc_application_name: str,
  application_type: str = None,
  authorized_token_issuer: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer] = None,
  identity_namespace: str = None,
  region: str = None,
  service_integration: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName">idc_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn">idc_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">redshift_idc_application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer">authorized_token_issuer</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]</code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace">identity_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration">service_integration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]</code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `idc_display_name`<sup>Required</sup> <a name="idc_display_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```python
idc_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `idc_instance_arn`<sup>Required</sup> <a name="idc_instance_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```python
idc_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `redshift_idc_application_name`<sup>Required</sup> <a name="redshift_idc_application_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```python
redshift_idc_application_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `application_type`<sup>Optional</sup> <a name="application_type" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `authorized_token_issuer`<sup>Optional</sup> <a name="authorized_token_issuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer"></a>

```python
authorized_token_issuer: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `identity_namespace`<sup>Optional</sup> <a name="identity_namespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace"></a>

```python
identity_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `service_integration`<sup>Optional</sup> <a name="service_integration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration"></a>

```python
service_integration: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

### RedshiftIdcApplicationServiceIntegration <a name="RedshiftIdcApplicationServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration(
  lake_formation: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormation] = None,
  redshift: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshift] = None,
  s3_access_grants: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrants] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation">lake_formation</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]</code> | lake_formation block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift">redshift</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]</code> | redshift block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants">s3_access_grants</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]</code> | s3_access_grants block. |

---

##### `lake_formation`<sup>Optional</sup> <a name="lake_formation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation"></a>

```python
lake_formation: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]

lake_formation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift"></a>

```python
redshift: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshift]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}

---

##### `s3_access_grants`<sup>Optional</sup> <a name="s3_access_grants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants"></a>

```python
s3_access_grants: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrants]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]

s3_access_grants block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormation <a name="RedshiftIdcApplicationServiceIntegrationLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation(
  lake_formation_query: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery">lake_formation_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]</code> | lake_formation_query block. |

---

##### `lake_formation_query`<sup>Optional</sup> <a name="lake_formation_query" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery"></a>

```python
lake_formation_query: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]

lake_formation_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery(
  authorization: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationRedshift <a name="RedshiftIdcApplicationServiceIntegrationRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift(
  connect: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshiftConnect] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect">connect</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]</code> | connect block. |

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect"></a>

```python
connect: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshiftConnect]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]

connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}

---

### RedshiftIdcApplicationServiceIntegrationRedshiftConnect <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect(
  authorization: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrants <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants(
  read_write_access: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess">read_write_access</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]</code> | read_write_access block. |

---

##### `read_write_access`<sup>Optional</sup> <a name="read_write_access" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess"></a>

```python
read_write_access: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]

read_write_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess(
  authorization: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuerList <a name="RedshiftIdcApplicationAuthorizedTokenIssuerList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationAuthorizedTokenIssuer]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>]

---


### RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference <a name="RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList">reset_authorized_audiences_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn">reset_trusted_token_issuer_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorized_audiences_list` <a name="reset_authorized_audiences_list" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList"></a>

```python
def reset_authorized_audiences_list() -> None
```

##### `reset_trusted_token_issuer_arn` <a name="reset_trusted_token_issuer_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn"></a>

```python
def reset_trusted_token_issuer_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput">authorized_audiences_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput">trusted_token_issuer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList">authorized_audiences_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn">trusted_token_issuer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_audiences_list_input`<sup>Optional</sup> <a name="authorized_audiences_list_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput"></a>

```python
authorized_audiences_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_token_issuer_arn_input`<sup>Optional</sup> <a name="trusted_token_issuer_arn_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput"></a>

```python
trusted_token_issuer_arn_input: str
```

- *Type:* str

---

##### `authorized_audiences_list`<sup>Required</sup> <a name="authorized_audiences_list" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList"></a>

```python
authorized_audiences_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_token_issuer_arn`<sup>Required</sup> <a name="trusted_token_issuer_arn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn"></a>

```python
trusted_token_issuer_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery">put_lake_formation_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery">reset_lake_formation_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lake_formation_query` <a name="put_lake_formation_query" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery"></a>

```python
def put_lake_formation_query(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]

---

##### `reset_lake_formation_query` <a name="reset_lake_formation_query" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery"></a>

```python
def reset_lake_formation_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery">lake_formation_query</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput">lake_formation_query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lake_formation_query`<sup>Required</sup> <a name="lake_formation_query" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery"></a>

```python
lake_formation_query: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a>

---

##### `lake_formation_query_input`<sup>Optional</sup> <a name="lake_formation_query_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```python
lake_formation_query_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>

---


### RedshiftIdcApplicationServiceIntegrationList <a name="RedshiftIdcApplicationServiceIntegrationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>]

---


### RedshiftIdcApplicationServiceIntegrationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation">put_lake_formation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift">put_redshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants">put_s3_access_grants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation">reset_lake_formation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift">reset_redshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants">reset_s3_access_grants</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lake_formation` <a name="put_lake_formation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation"></a>

```python
def put_lake_formation(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]

---

##### `put_redshift` <a name="put_redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift"></a>

```python
def put_redshift(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshift]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]

---

##### `put_s3_access_grants` <a name="put_s3_access_grants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants"></a>

```python
def put_s3_access_grants(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrants]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]

---

##### `reset_lake_formation` <a name="reset_lake_formation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation"></a>

```python
def reset_lake_formation() -> None
```

##### `reset_redshift` <a name="reset_redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift"></a>

```python
def reset_redshift() -> None
```

##### `reset_s3_access_grants` <a name="reset_s3_access_grants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants"></a>

```python
def reset_s3_access_grants() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation">lake_formation</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants">s3_access_grants</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput">lake_formation_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput">redshift_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput">s3_access_grants_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lake_formation`<sup>Required</sup> <a name="lake_formation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation"></a>

```python
lake_formation: RedshiftIdcApplicationServiceIntegrationLakeFormationList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift"></a>

```python
redshift: RedshiftIdcApplicationServiceIntegrationRedshiftList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a>

---

##### `s3_access_grants`<sup>Required</sup> <a name="s3_access_grants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants"></a>

```python
s3_access_grants: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a>

---

##### `lake_formation_input`<sup>Optional</sup> <a name="lake_formation_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput"></a>

```python
lake_formation_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationLakeFormation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>]

---

##### `redshift_input`<sup>Optional</sup> <a name="redshift_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput"></a>

```python
redshift_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshift]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]

---

##### `s3_access_grants_input`<sup>Optional</sup> <a name="s3_access_grants_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput"></a>

```python
s3_access_grants_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrants]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshiftConnect]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshift]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect">put_connect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect">reset_connect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connect` <a name="put_connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect"></a>

```python
def put_connect(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshiftConnect]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]

---

##### `reset_connect` <a name="reset_connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect"></a>

```python
def reset_connect() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput">connect_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect"></a>

```python
connect: RedshiftIdcApplicationServiceIntegrationRedshiftConnectList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a>

---

##### `connect_input`<sup>Optional</sup> <a name="connect_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput"></a>

```python
connect_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationRedshiftConnect]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrants]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess">put_read_write_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess">reset_read_write_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_read_write_access` <a name="put_read_write_access" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```python
def put_read_write_access(
  value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]

---

##### `reset_read_write_access` <a name="reset_read_write_access" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```python
def reset_read_write_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess">read_write_access</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput">read_write_access_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_write_access`<sup>Required</sup> <a name="read_write_access" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```python
read_write_access: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a>

---

##### `read_write_access_input`<sup>Optional</sup> <a name="read_write_access_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```python
read_write_access_input: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import redshift_idc_application

redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>

---



