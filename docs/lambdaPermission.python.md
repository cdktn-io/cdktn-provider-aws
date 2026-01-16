# `lambdaPermission` Submodule <a name="`lambdaPermission` Submodule" id="@cdktn/provider-aws.lambdaPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaPermission <a name="LambdaPermission" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission aws_lambda_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermission(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  function_name: str,
  principal: str,
  event_source_token: str = None,
  function_url_auth_type: str = None,
  id: str = None,
  invoked_via_function_url: bool | IResolvable = None,
  principal_org_id: str = None,
  qualifier: str = None,
  region: str = None,
  source_account: str = None,
  source_arn: str = None,
  statement_id: str = None,
  statement_id_prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.eventSourceToken">event_source_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionUrlAuthType">function_url_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.invokedViaFunctionUrl">invoked_via_function_url</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principalOrgId">principal_org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceAccount">source_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#action LambdaPermission#action}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal LambdaPermission#principal}.

---

##### `event_source_token`<sup>Optional</sup> <a name="event_source_token" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.eventSourceToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `function_url_auth_type`<sup>Optional</sup> <a name="function_url_auth_type" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.functionUrlAuthType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoked_via_function_url`<sup>Optional</sup> <a name="invoked_via_function_url" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.invokedViaFunctionUrl"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}.

---

##### `principal_org_id`<sup>Optional</sup> <a name="principal_org_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.principalOrgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#region LambdaPermission#region}

---

##### `source_account`<sup>Optional</sup> <a name="source_account" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.sourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `statement_id`<sup>Optional</sup> <a name="statement_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `statement_id_prefix`<sup>Optional</sup> <a name="statement_id_prefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.Initializer.parameter.statementIdPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken">reset_event_source_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType">reset_function_url_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl">reset_invoked_via_function_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId">reset_principal_org_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount">reset_source_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn">reset_source_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementId">reset_statement_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix">reset_statement_id_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_event_source_token` <a name="reset_event_source_token" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetEventSourceToken"></a>

```python
def reset_event_source_token() -> None
```

##### `reset_function_url_auth_type` <a name="reset_function_url_auth_type" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetFunctionUrlAuthType"></a>

```python
def reset_function_url_auth_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invoked_via_function_url` <a name="reset_invoked_via_function_url" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetInvokedViaFunctionUrl"></a>

```python
def reset_invoked_via_function_url() -> None
```

##### `reset_principal_org_id` <a name="reset_principal_org_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetPrincipalOrgId"></a>

```python
def reset_principal_org_id() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source_account` <a name="reset_source_account" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceAccount"></a>

```python
def reset_source_account() -> None
```

##### `reset_source_arn` <a name="reset_source_arn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetSourceArn"></a>

```python
def reset_source_arn() -> None
```

##### `reset_statement_id` <a name="reset_statement_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementId"></a>

```python
def reset_statement_id() -> None
```

##### `reset_statement_id_prefix` <a name="reset_statement_id_prefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.resetStatementIdPrefix"></a>

```python
def reset_statement_id_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LambdaPermission resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermission.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LambdaPermission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaPermission to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput">event_source_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput">function_url_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput">invoked_via_function_url_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput">principal_org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput">source_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput">statement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput">statement_id_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken">event_source_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType">function_url_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl">invoked_via_function_url</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId">principal_org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount">source_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementId">statement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `event_source_token_input`<sup>Optional</sup> <a name="event_source_token_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceTokenInput"></a>

```python
event_source_token_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_url_auth_type_input`<sup>Optional</sup> <a name="function_url_auth_type_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthTypeInput"></a>

```python
function_url_auth_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invoked_via_function_url_input`<sup>Optional</sup> <a name="invoked_via_function_url_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrlInput"></a>

```python
invoked_via_function_url_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `principal_org_id_input`<sup>Optional</sup> <a name="principal_org_id_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgIdInput"></a>

```python
principal_org_id_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_account_input`<sup>Optional</sup> <a name="source_account_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccountInput"></a>

```python
source_account_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `statement_id_input`<sup>Optional</sup> <a name="statement_id_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdInput"></a>

```python
statement_id_input: str
```

- *Type:* str

---

##### `statement_id_prefix_input`<sup>Optional</sup> <a name="statement_id_prefix_input" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefixInput"></a>

```python
statement_id_prefix_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `event_source_token`<sup>Required</sup> <a name="event_source_token" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.eventSourceToken"></a>

```python
event_source_token: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_url_auth_type`<sup>Required</sup> <a name="function_url_auth_type" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.functionUrlAuthType"></a>

```python
function_url_auth_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invoked_via_function_url`<sup>Required</sup> <a name="invoked_via_function_url" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.invokedViaFunctionUrl"></a>

```python
invoked_via_function_url: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `principal_org_id`<sup>Required</sup> <a name="principal_org_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.principalOrgId"></a>

```python
principal_org_id: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_account`<sup>Required</sup> <a name="source_account" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceAccount"></a>

```python
source_account: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

---

##### `statement_id_prefix`<sup>Required</sup> <a name="statement_id_prefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.statementIdPrefix"></a>

```python
statement_id_prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdaPermission.LambdaPermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaPermissionConfig <a name="LambdaPermissionConfig" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambda_permission

lambdaPermission.LambdaPermissionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: str,
  function_name: str,
  principal: str,
  event_source_token: str = None,
  function_url_auth_type: str = None,
  id: str = None,
  invoked_via_function_url: bool | IResolvable = None,
  principal_org_id: str = None,
  qualifier: str = None,
  region: str = None,
  source_account: str = None,
  source_arn: str = None,
  statement_id: str = None,
  statement_id_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#action LambdaPermission#action}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal LambdaPermission#principal}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken">event_source_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType">function_url_auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#id LambdaPermission#id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl">invoked_via_function_url</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId">principal_org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount">source_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}. |
| <code><a href="#@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#action LambdaPermission#action}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_name LambdaPermission#function_name}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal LambdaPermission#principal}.

---

##### `event_source_token`<sup>Optional</sup> <a name="event_source_token" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.eventSourceToken"></a>

```python
event_source_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#event_source_token LambdaPermission#event_source_token}.

---

##### `function_url_auth_type`<sup>Optional</sup> <a name="function_url_auth_type" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.functionUrlAuthType"></a>

```python
function_url_auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#function_url_auth_type LambdaPermission#function_url_auth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#id LambdaPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoked_via_function_url`<sup>Optional</sup> <a name="invoked_via_function_url" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.invokedViaFunctionUrl"></a>

```python
invoked_via_function_url: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#invoked_via_function_url LambdaPermission#invoked_via_function_url}.

---

##### `principal_org_id`<sup>Optional</sup> <a name="principal_org_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.principalOrgId"></a>

```python
principal_org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#principal_org_id LambdaPermission#principal_org_id}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#qualifier LambdaPermission#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#region LambdaPermission#region}

---

##### `source_account`<sup>Optional</sup> <a name="source_account" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceAccount"></a>

```python
source_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_account LambdaPermission#source_account}.

---

##### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#source_arn LambdaPermission#source_arn}.

---

##### `statement_id`<sup>Optional</sup> <a name="statement_id" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id LambdaPermission#statement_id}.

---

##### `statement_id_prefix`<sup>Optional</sup> <a name="statement_id_prefix" id="@cdktn/provider-aws.lambdaPermission.LambdaPermissionConfig.property.statementIdPrefix"></a>

```python
statement_id_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_permission#statement_id_prefix LambdaPermission#statement_id_prefix}.

---



