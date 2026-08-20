# `dataAwsRdsSnapshots` Submodule <a name="`dataAwsRdsSnapshots` Submodule" id="@cdktn/provider-aws.dataAwsRdsSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsSnapshots <a name="DataAwsRdsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots aws_rds_snapshots}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshots(scope Construct, id *string, config DataAwsRdsSnapshotsConfig) DataAwsRdsSnapshots
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig">DataAwsRdsSnapshotsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig">DataAwsRdsSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier">ResetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier">ResetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic">ResetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared">ResetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType">ResetSnapshotType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDbInstanceIdentifier` <a name="ResetDbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbInstanceIdentifier"></a>

```go
func ResetDbInstanceIdentifier()
```

##### `ResetDbSnapshotIdentifier` <a name="ResetDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetDbSnapshotIdentifier"></a>

```go
func ResetDbSnapshotIdentifier()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetIncludePublic` <a name="ResetIncludePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludePublic"></a>

```go
func ResetIncludePublic()
```

##### `ResetIncludeShared` <a name="ResetIncludeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetIncludeShared"></a>

```go
func ResetIncludeShared()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSnapshotType` <a name="ResetSnapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.resetSnapshotType"></a>

```go
func ResetSnapshotType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.DataAwsRdsSnapshots_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.DataAwsRdsSnapshots_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.DataAwsRdsSnapshots_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.DataAwsRdsSnapshots_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsRdsSnapshots resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsRdsSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsRdsSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots">Snapshots</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput">DbInstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput">DbSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput">IncludePublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput">IncludeSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput">SnapshotTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic">IncludePublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared">IncludeShared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filter"></a>

```go
func Filter() DataAwsRdsSnapshotsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList">DataAwsRdsSnapshotsFilterList</a>

---

##### `Snapshots`<sup>Required</sup> <a name="Snapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshots"></a>

```go
func Snapshots() DataAwsRdsSnapshotsSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList">DataAwsRdsSnapshotsSnapshotsList</a>

---

##### `DbInstanceIdentifierInput`<sup>Optional</sup> <a name="DbInstanceIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifierInput"></a>

```go
func DbInstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `DbSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbSnapshotIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifierInput"></a>

```go
func DbSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IncludePublicInput`<sup>Optional</sup> <a name="IncludePublicInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublicInput"></a>

```go
func IncludePublicInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSharedInput`<sup>Optional</sup> <a name="IncludeSharedInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeSharedInput"></a>

```go
func IncludeSharedInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SnapshotTypeInput`<sup>Optional</sup> <a name="SnapshotTypeInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotTypeInput"></a>

```go
func SnapshotTypeInput() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbInstanceIdentifier"></a>

```go
func DbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `DbSnapshotIdentifier`<sup>Required</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.dbSnapshotIdentifier"></a>

```go
func DbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `IncludePublic`<sup>Required</sup> <a name="IncludePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includePublic"></a>

```go
func IncludePublic() interface{}
```

- *Type:* interface{}

---

##### `IncludeShared`<sup>Required</sup> <a name="IncludeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.includeShared"></a>

```go
func IncludeShared() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshots.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsSnapshotsConfig <a name="DataAwsRdsSnapshotsConfig" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

&dataawsrdssnapshots.DataAwsRdsSnapshotsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DbInstanceIdentifier: *string,
	DbSnapshotIdentifier: *string,
	Filter: interface{},
	IncludePublic: interface{},
	IncludeShared: interface{},
	Region: *string,
	SnapshotType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic">IncludePublic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared">IncludeShared</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbInstanceIdentifier`<sup>Optional</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbInstanceIdentifier"></a>

```go
DbInstanceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#db_instance_identifier DataAwsRdsSnapshots#db_instance_identifier}.

---

##### `DbSnapshotIdentifier`<sup>Optional</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.dbSnapshotIdentifier"></a>

```go
DbSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#db_snapshot_identifier DataAwsRdsSnapshots#db_snapshot_identifier}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#filter DataAwsRdsSnapshots#filter}

---

##### `IncludePublic`<sup>Optional</sup> <a name="IncludePublic" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includePublic"></a>

```go
IncludePublic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#include_public DataAwsRdsSnapshots#include_public}.

---

##### `IncludeShared`<sup>Optional</sup> <a name="IncludeShared" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.includeShared"></a>

```go
IncludeShared interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#include_shared DataAwsRdsSnapshots#include_shared}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#region DataAwsRdsSnapshots#region}

---

##### `SnapshotType`<sup>Optional</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsConfig.property.snapshotType"></a>

```go
SnapshotType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#snapshot_type DataAwsRdsSnapshots#snapshot_type}.

---

### DataAwsRdsSnapshotsFilter <a name="DataAwsRdsSnapshotsFilter" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

&dataawsrdssnapshots.DataAwsRdsSnapshotsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#name DataAwsRdsSnapshots#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/rds_snapshots#values DataAwsRdsSnapshots#values}.

---

### DataAwsRdsSnapshotsSnapshots <a name="DataAwsRdsSnapshotsSnapshots" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

&dataawsrdssnapshots.DataAwsRdsSnapshotsSnapshots {

}
```


### DataAwsRdsSnapshotsSnapshotsTagListStruct <a name="DataAwsRdsSnapshotsSnapshotsTagListStruct" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

&dataawsrdssnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsSnapshotsFilterList <a name="DataAwsRdsSnapshotsFilterList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRdsSnapshotsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get"></a>

```go
func Get(index *f64) DataAwsRdsSnapshotsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsRdsSnapshotsFilterOutputReference <a name="DataAwsRdsSnapshotsFilterOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRdsSnapshotsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsRdsSnapshotsSnapshotsList <a name="DataAwsRdsSnapshotsSnapshotsList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsSnapshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRdsSnapshotsSnapshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get"></a>

```go
func Get(index *f64) DataAwsRdsSnapshotsSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsRdsSnapshotsSnapshotsOutputReference <a name="DataAwsRdsSnapshotsSnapshotsOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsSnapshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRdsSnapshotsSnapshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn">DbSnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime">OriginalSnapshotCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime">SnapshotCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList">TagList</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbInstanceIdentifier"></a>

```go
func DbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `DbSnapshotArn`<sup>Required</sup> <a name="DbSnapshotArn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotArn"></a>

```go
func DbSnapshotArn() *string
```

- *Type:* *string

---

##### `DbSnapshotIdentifier`<sup>Required</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.dbSnapshotIdentifier"></a>

```go
func DbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.optionGroupName"></a>

```go
func OptionGroupName() *string
```

- *Type:* *string

---

##### `OriginalSnapshotCreateTime`<sup>Required</sup> <a name="OriginalSnapshotCreateTime" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.originalSnapshotCreateTime"></a>

```go
func OriginalSnapshotCreateTime() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SnapshotCreateTime`<sup>Required</sup> <a name="SnapshotCreateTime" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotCreateTime"></a>

```go
func SnapshotCreateTime() *string
```

- *Type:* *string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceDbSnapshotIdentifier"></a>

```go
func SourceDbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `TagList`<sup>Required</sup> <a name="TagList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.tagList"></a>

```go
func TagList() DataAwsRdsSnapshotsSnapshotsTagListStructList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList">DataAwsRdsSnapshotsSnapshotsTagListStructList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRdsSnapshotsSnapshots
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshots">DataAwsRdsSnapshotsSnapshots</a>

---


### DataAwsRdsSnapshotsSnapshotsTagListStructList <a name="DataAwsRdsSnapshotsSnapshotsTagListStructList" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsSnapshotsTagListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRdsSnapshotsSnapshotsTagListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get"></a>

```go
func Get(index *f64) DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference <a name="DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsrdssnapshots"

dataawsrdssnapshots.NewDataAwsRdsSnapshotsSnapshotsTagListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRdsSnapshotsSnapshotsTagListStruct
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsSnapshots.DataAwsRdsSnapshotsSnapshotsTagListStruct">DataAwsRdsSnapshotsSnapshotsTagListStruct</a>

---



