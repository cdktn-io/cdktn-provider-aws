# `dataAwsOdbNetworkPeeringConnections` Submodule <a name="`dataAwsOdbNetworkPeeringConnections` Submodule" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbNetworkPeeringConnections <a name="DataAwsOdbNetworkPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/data-sources/odb_network_peering_connections aws_odb_network_peering_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.NewDataAwsOdbNetworkPeeringConnections(scope Construct, id *string, config DataAwsOdbNetworkPeeringConnectionsConfig) DataAwsOdbNetworkPeeringConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig">DataAwsOdbNetworkPeeringConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig">DataAwsOdbNetworkPeeringConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections">PutOdbPeeringConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections">ResetOdbPeeringConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOdbPeeringConnections` <a name="PutOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections"></a>

```go
func PutOdbPeeringConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.putOdbPeeringConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOdbPeeringConnections` <a name="ResetOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetOdbPeeringConnections"></a>

```go
func ResetOdbPeeringConnections()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnections_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsOdbNetworkPeeringConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsOdbNetworkPeeringConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsOdbNetworkPeeringConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/data-sources/odb_network_peering_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbNetworkPeeringConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections">OdbPeeringConnections</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput">OdbPeeringConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `OdbPeeringConnections`<sup>Required</sup> <a name="OdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnections"></a>

```go
func OdbPeeringConnections() DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList">DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList</a>

---

##### `OdbPeeringConnectionsInput`<sup>Optional</sup> <a name="OdbPeeringConnectionsInput" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.odbPeeringConnectionsInput"></a>

```go
func OdbPeeringConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbNetworkPeeringConnectionsConfig <a name="DataAwsOdbNetworkPeeringConnectionsConfig" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

&dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnectionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OdbPeeringConnections: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections">OdbPeeringConnections</a></code> | <code>interface{}</code> | odb_peering_connections block. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OdbPeeringConnections`<sup>Optional</sup> <a name="OdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.odbPeeringConnections"></a>

```go
OdbPeeringConnections interface{}
```

- *Type:* interface{}

odb_peering_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/data-sources/odb_network_peering_connections#odb_peering_connections DataAwsOdbNetworkPeeringConnections#odb_peering_connections}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/data-sources/odb_network_peering_connections#region DataAwsOdbNetworkPeeringConnections#region}

---

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

&dataawsodbnetworkpeeringconnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnections {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.NewDataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get"></a>

```go
func Get(index *f64) DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference <a name="DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbnetworkpeeringconnections"

dataawsodbnetworkpeeringconnections.NewDataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbNetworkPeeringConnections.DataAwsOdbNetworkPeeringConnectionsOdbPeeringConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



