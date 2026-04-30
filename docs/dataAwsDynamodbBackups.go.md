# `dataAwsDynamodbBackups` Submodule <a name="`dataAwsDynamodbBackups` Submodule" id="@cdktn/provider-aws.dataAwsDynamodbBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbBackups <a name="DataAwsDynamodbBackups" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.NewDataAwsDynamodbBackups(scope Construct, id *string, config DataAwsDynamodbBackupsConfig) DataAwsDynamodbBackups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound">ResetTimeRangeLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound">ResetTimeRangeUpperBound</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackupType` <a name="ResetBackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType"></a>

```go
func ResetBackupType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTimeRangeLowerBound` <a name="ResetTimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound"></a>

```go
func ResetTimeRangeLowerBound()
```

##### `ResetTimeRangeUpperBound` <a name="ResetTimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound"></a>

```go
func ResetTimeRangeUpperBound()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.DataAwsDynamodbBackups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.DataAwsDynamodbBackups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.DataAwsDynamodbBackups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.DataAwsDynamodbBackups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsDynamodbBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsDynamodbBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDynamodbBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries">BackupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput">BackupTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput">TimeRangeLowerBoundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput">TimeRangeUpperBoundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType">BackupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound">TimeRangeLowerBound</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound">TimeRangeUpperBound</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BackupSummaries`<sup>Required</sup> <a name="BackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries"></a>

```go
func BackupSummaries() DataAwsDynamodbBackupsBackupSummariesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a>

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput"></a>

```go
func BackupTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeRangeLowerBoundInput`<sup>Optional</sup> <a name="TimeRangeLowerBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput"></a>

```go
func TimeRangeLowerBoundInput() *string
```

- *Type:* *string

---

##### `TimeRangeUpperBoundInput`<sup>Optional</sup> <a name="TimeRangeUpperBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput"></a>

```go
func TimeRangeUpperBoundInput() *string
```

- *Type:* *string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType"></a>

```go
func BackupType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TimeRangeLowerBound`<sup>Required</sup> <a name="TimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound"></a>

```go
func TimeRangeLowerBound() *string
```

- *Type:* *string

---

##### `TimeRangeUpperBound`<sup>Required</sup> <a name="TimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound"></a>

```go
func TimeRangeUpperBound() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbBackupsBackupSummaries <a name="DataAwsDynamodbBackupsBackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

&dataawsdynamodbbackups.DataAwsDynamodbBackupsBackupSummaries {

}
```


### DataAwsDynamodbBackupsConfig <a name="DataAwsDynamodbBackupsConfig" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

&dataawsdynamodbbackups.DataAwsDynamodbBackupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupType: *string,
	Region: *string,
	TableName: *string,
	TimeRangeLowerBound: *string,
	TimeRangeUpperBound: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType">BackupType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound">TimeRangeLowerBound</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound">TimeRangeUpperBound</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType"></a>

```go
BackupType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}.

---

##### `TimeRangeLowerBound`<sup>Optional</sup> <a name="TimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound"></a>

```go
TimeRangeLowerBound *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}.

---

##### `TimeRangeUpperBound`<sup>Optional</sup> <a name="TimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound"></a>

```go
TimeRangeUpperBound *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbBackupsBackupSummariesList <a name="DataAwsDynamodbBackupsBackupSummariesList" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.NewDataAwsDynamodbBackupsBackupSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsDynamodbBackupsBackupSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get"></a>

```go
func Get(index *f64) DataAwsDynamodbBackupsBackupSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsDynamodbBackupsBackupSummariesOutputReference <a name="DataAwsDynamodbBackupsBackupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawsdynamodbbackups"

dataawsdynamodbbackups.NewDataAwsDynamodbBackupsBackupSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsDynamodbBackupsBackupSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn">BackupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime">BackupCreationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime">BackupExpiryDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName">BackupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes">BackupSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus">BackupStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType">BackupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn">TableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupArn`<sup>Required</sup> <a name="BackupArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn"></a>

```go
func BackupArn() *string
```

- *Type:* *string

---

##### `BackupCreationDateTime`<sup>Required</sup> <a name="BackupCreationDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime"></a>

```go
func BackupCreationDateTime() *string
```

- *Type:* *string

---

##### `BackupExpiryDateTime`<sup>Required</sup> <a name="BackupExpiryDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime"></a>

```go
func BackupExpiryDateTime() *string
```

- *Type:* *string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName"></a>

```go
func BackupName() *string
```

- *Type:* *string

---

##### `BackupSizeBytes`<sup>Required</sup> <a name="BackupSizeBytes" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes"></a>

```go
func BackupSizeBytes() *f64
```

- *Type:* *f64

---

##### `BackupStatus`<sup>Required</sup> <a name="BackupStatus" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus"></a>

```go
func BackupStatus() *string
```

- *Type:* *string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType"></a>

```go
func BackupType() *string
```

- *Type:* *string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn"></a>

```go
func TableArn() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsDynamodbBackupsBackupSummaries
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a>

---



