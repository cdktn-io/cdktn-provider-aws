# `dataAwsOdbAutonomousDatabase` Submodule <a name="`dataAwsOdbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbAutonomousDatabase <a name="DataAwsOdbAutonomousDatabase" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/data-sources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabase(scope Construct, id *string, config DataAwsOdbAutonomousDatabaseConfig) DataAwsOdbAutonomousDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig">DataAwsOdbAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsOdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsOdbAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsOdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/data-sources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource">AdminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps">AllowlistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress">PercentProgress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```go
func ActualUsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AdminPasswordSource`<sup>Required</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.adminPasswordSource"></a>

```go
func AdminPasswordSource() DataAwsOdbAutonomousDatabaseAdminPasswordSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```go
func AllocatedStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.allowlistedIps"></a>

```go
func AllowlistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```go
func AutonomousMaintenanceScheduleType() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```go
func AutoRefreshFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```go
func AutoRefreshPointLagInSeconds() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```go
func ByolComputeCountLimit() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```go
func CustomerContactsToSendToOci() DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbToolsDetails"></a>

```go
func DbToolsDetails() DataAwsOdbAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList">DataAwsOdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EncryptionKeyProvider`<sup>Required</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```go
func EncryptionKeyProvider() *string
```

- *Type:* *string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```go
func IsAutoScalingForStorageEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsBackupRetentionLocked`<sup>Required</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```go
func IsBackupRetentionLocked() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```go
func IsLocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```go
func IsMtlsConnectionRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```go
func LongTermBackupSchedule() DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList">DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkArn"></a>

```go
func OdbNetworkArn() *string
```

- *Type:* *string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.odbNetworkId"></a>

```go
func OdbNetworkId() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.percentProgress"></a>

```go
func PercentProgress() *f64
```

- *Type:* *f64

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```go
func ResourcePoolLeaderId() *string
```

- *Type:* *string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.resourcePoolSummary"></a>

```go
func ResourcePoolSummary() DataAwsOdbAutonomousDatabaseResourcePoolSummaryList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList">DataAwsOdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.scheduledOperations"></a>

```go
func ScheduledOperations() DataAwsOdbAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList">DataAwsOdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```go
func ServiceConsoleUrl() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `StandbyAllowlistedIps`<sup>Required</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```go
func StandbyAllowlistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `StandbyAllowlistedIpsSource`<sup>Required</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```go
func StandbyAllowlistedIpsSource() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```go
func TimeOfAutoRefreshStart() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSource <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource {

}
```


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret {

}
```


### DataAwsOdbAutonomousDatabaseConfig <a name="DataAwsOdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Unique identifier of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Unique identifier of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/data-sources/odb_autonomous_database#id DataAwsOdbAutonomousDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/data-sources/odb_autonomous_database#region DataAwsOdbAutonomousDatabase#region}

---

### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci {

}
```


### DataAwsOdbAutonomousDatabaseDbToolsDetails <a name="DataAwsOdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails {

}
```


### DataAwsOdbAutonomousDatabaseLongTermBackupSchedule <a name="DataAwsOdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule {

}
```


### DataAwsOdbAutonomousDatabaseResourcePoolSummary <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary {

}
```


### DataAwsOdbAutonomousDatabaseScheduledOperations <a name="DataAwsOdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

&dataawsodbautonomousdatabase.DataAwsOdbAutonomousDatabaseScheduledOperations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">ExternalIdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```go
func ExternalIdType() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceList <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseAdminPasswordSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseAdminPasswordSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedAwsSecret`<sup>Required</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```go
func CustomerManagedAwsSecret() DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">DataAwsOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseAdminPasswordSource
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseAdminPasswordSource">DataAwsOdbAutonomousDatabaseAdminPasswordSource</a>

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci">DataAwsOdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsList <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseDbToolsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseDbToolsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```go
func MaxIdleTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseDbToolsDetails
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseDbToolsDetails">DataAwsOdbAutonomousDatabaseDbToolsDetails</a>

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseLongTermBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```go
func IsDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```go
func RepeatCadence() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```go
func TimeOfBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseLongTermBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseLongTermBackupSchedule">DataAwsOdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryList <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseResourcePoolSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseResourcePoolSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">AvailableComputeCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">AvailableStorageCapacityInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">TotalComputeCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableComputeCapacity`<sup>Required</sup> <a name="AvailableComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```go
func AvailableComputeCapacity() *f64
```

- *Type:* *f64

---

##### `AvailableStorageCapacityInTbs`<sup>Required</sup> <a name="AvailableStorageCapacityInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```go
func AvailableStorageCapacityInTbs() *f64
```

- *Type:* *f64

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```go
func IsDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `PoolStorageSizeInTbs`<sup>Required</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```go
func PoolStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `TotalComputeCapacity`<sup>Required</sup> <a name="TotalComputeCapacity" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```go
func TotalComputeCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseResourcePoolSummary
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseResourcePoolSummary">DataAwsOdbAutonomousDatabaseResourcePoolSummary</a>

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsList <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseScheduledOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbAutonomousDatabaseScheduledOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get"></a>

```go
func Get(index *f64) DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference <a name="DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsodbautonomousdatabase"

dataawsodbautonomousdatabase.NewDataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```go
func ScheduledStartTime() *string
```

- *Type:* *string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```go
func ScheduledStopTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbAutonomousDatabaseScheduledOperations
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOdbAutonomousDatabase.DataAwsOdbAutonomousDatabaseScheduledOperations">DataAwsOdbAutonomousDatabaseScheduledOperations</a>

---



