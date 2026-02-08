# `dataAwsBackupPlan` Submodule <a name="`dataAwsBackupPlan` Submodule" id="@cdktn/provider-aws.dataAwsBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBackupPlan <a name="DataAwsBackupPlan" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlan(scope Construct, id *string, config DataAwsBackupPlanConfig) DataAwsBackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig">DataAwsBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig">DataAwsBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.DataAwsBackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.DataAwsBackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.DataAwsBackupPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.DataAwsBackupPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsBackupPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList">DataAwsBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.scanSetting">ScanSetting</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList">DataAwsBackupPlanScanSettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.planIdInput">PlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.planId">PlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.rule"></a>

```go
func Rule() DataAwsBackupPlanRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList">DataAwsBackupPlanRuleList</a>

---

##### `ScanSetting`<sup>Required</sup> <a name="ScanSetting" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.scanSetting"></a>

```go
func ScanSetting() DataAwsBackupPlanScanSettingList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList">DataAwsBackupPlanScanSettingList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlanIdInput`<sup>Optional</sup> <a name="PlanIdInput" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.planIdInput"></a>

```go
func PlanIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.planId"></a>

```go
func PlanId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBackupPlanConfig <a name="DataAwsBackupPlanConfig" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PlanId: *string,
	Id: *string,
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.planId">PlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#plan_id DataAwsBackupPlan#plan_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#id DataAwsBackupPlan#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#tags DataAwsBackupPlan#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.planId"></a>

```go
PlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#plan_id DataAwsBackupPlan#plan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#id DataAwsBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#region DataAwsBackupPlan#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/backup_plan#tags DataAwsBackupPlan#tags}.

---

### DataAwsBackupPlanRule <a name="DataAwsBackupPlanRule" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanRule {

}
```


### DataAwsBackupPlanRuleCopyAction <a name="DataAwsBackupPlanRuleCopyAction" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanRuleCopyAction {

}
```


### DataAwsBackupPlanRuleCopyActionLifecycle <a name="DataAwsBackupPlanRuleCopyActionLifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanRuleCopyActionLifecycle {

}
```


### DataAwsBackupPlanRuleLifecycle <a name="DataAwsBackupPlanRuleLifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanRuleLifecycle {

}
```


### DataAwsBackupPlanRuleScanAction <a name="DataAwsBackupPlanRuleScanAction" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanRuleScanAction {

}
```


### DataAwsBackupPlanScanSetting <a name="DataAwsBackupPlanScanSetting" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

&dataawsbackupplan.DataAwsBackupPlanScanSetting {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBackupPlanRuleCopyActionLifecycleList <a name="DataAwsBackupPlanRuleCopyActionLifecycleList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleCopyActionLifecycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanRuleCopyActionLifecycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanRuleCopyActionLifecycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanRuleCopyActionLifecycleOutputReference <a name="DataAwsBackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleCopyActionLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanRuleCopyActionLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycle">DataAwsBackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycle">DataAwsBackupPlanRuleCopyActionLifecycle</a>

---


### DataAwsBackupPlanRuleCopyActionList <a name="DataAwsBackupPlanRuleCopyActionList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleCopyActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanRuleCopyActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanRuleCopyActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanRuleCopyActionOutputReference <a name="DataAwsBackupPlanRuleCopyActionOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleCopyActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanRuleCopyActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList">DataAwsBackupPlanRuleCopyActionLifecycleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyAction">DataAwsBackupPlanRuleCopyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```go
func DestinationVaultArn() *string
```

- *Type:* *string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```go
func Lifecycle() DataAwsBackupPlanRuleCopyActionLifecycleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionLifecycleList">DataAwsBackupPlanRuleCopyActionLifecycleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanRuleCopyAction
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyAction">DataAwsBackupPlanRuleCopyAction</a>

---


### DataAwsBackupPlanRuleLifecycleList <a name="DataAwsBackupPlanRuleLifecycleList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleLifecycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanRuleLifecycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanRuleLifecycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanRuleLifecycleOutputReference <a name="DataAwsBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanRuleLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycle">DataAwsBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycle">DataAwsBackupPlanRuleLifecycle</a>

---


### DataAwsBackupPlanRuleList <a name="DataAwsBackupPlanRuleList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanRuleOutputReference <a name="DataAwsBackupPlanRuleOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.completionWindow">CompletionWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.copyAction">CopyAction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList">DataAwsBackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList">DataAwsBackupPlanRuleLifecycleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.scanAction">ScanAction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList">DataAwsBackupPlanRuleScanActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.startWindow">StartWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.targetVaultName">TargetVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRule">DataAwsBackupPlanRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompletionWindow`<sup>Required</sup> <a name="CompletionWindow" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.completionWindow"></a>

```go
func CompletionWindow() *f64
```

- *Type:* *f64

---

##### `CopyAction`<sup>Required</sup> <a name="CopyAction" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.copyAction"></a>

```go
func CopyAction() DataAwsBackupPlanRuleCopyActionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleCopyActionList">DataAwsBackupPlanRuleCopyActionList</a>

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```go
func EnableContinuousBackup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.lifecycle"></a>

```go
func Lifecycle() DataAwsBackupPlanRuleLifecycleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleLifecycleList">DataAwsBackupPlanRuleLifecycleList</a>

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```go
func RecoveryPointTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `ScanAction`<sup>Required</sup> <a name="ScanAction" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.scanAction"></a>

```go
func ScanAction() DataAwsBackupPlanRuleScanActionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList">DataAwsBackupPlanRuleScanActionList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindow`<sup>Required</sup> <a name="StartWindow" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.startWindow"></a>

```go
func StartWindow() *f64
```

- *Type:* *f64

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
func TargetLogicallyAirGappedBackupVaultArn() *string
```

- *Type:* *string

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.targetVaultName"></a>

```go
func TargetVaultName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanRule
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRule">DataAwsBackupPlanRule</a>

---


### DataAwsBackupPlanRuleScanActionList <a name="DataAwsBackupPlanRuleScanActionList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleScanActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanRuleScanActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanRuleScanActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanRuleScanActionOutputReference <a name="DataAwsBackupPlanRuleScanActionOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanRuleScanActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanRuleScanActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanAction">DataAwsBackupPlanRuleScanAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanRuleScanAction
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanRuleScanAction">DataAwsBackupPlanRuleScanAction</a>

---


### DataAwsBackupPlanScanSettingList <a name="DataAwsBackupPlanScanSettingList" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanScanSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBackupPlanScanSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.get"></a>

```go
func Get(index *f64) DataAwsBackupPlanScanSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBackupPlanScanSettingOutputReference <a name="DataAwsBackupPlanScanSettingOutputReference" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawsbackupplan"

dataawsbackupplan.NewDataAwsBackupPlanScanSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBackupPlanScanSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSetting">DataAwsBackupPlanScanSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.scannerRoleArn"></a>

```go
func ScannerRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBackupPlanScanSetting
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBackupPlan.DataAwsBackupPlanScanSetting">DataAwsBackupPlanScanSetting</a>

---



