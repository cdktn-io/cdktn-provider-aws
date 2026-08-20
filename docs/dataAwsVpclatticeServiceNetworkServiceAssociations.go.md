# `dataAwsVpclatticeServiceNetworkServiceAssociations` Submodule <a name="`dataAwsVpclatticeServiceNetworkServiceAssociations` Submodule" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociations <a name="DataAwsVpclatticeServiceNetworkServiceAssociations" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations aws_vpclattice_service_network_service_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.NewDataAwsVpclatticeServiceNetworkServiceAssociations(scope Construct, id *string, config DataAwsVpclatticeServiceNetworkServiceAssociationsConfig) DataAwsVpclatticeServiceNetworkServiceAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig">DataAwsVpclatticeServiceNetworkServiceAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig">DataAwsVpclatticeServiceNetworkServiceAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceIdentifier">ResetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceNetworkIdentifier">ResetServiceNetworkIdentifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceIdentifier` <a name="ResetServiceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceIdentifier"></a>

```go
func ResetServiceIdentifier()
```

##### `ResetServiceNetworkIdentifier` <a name="ResetServiceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceNetworkIdentifier"></a>

```go
func ResetServiceNetworkIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpclatticeServiceNetworkServiceAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsVpclatticeServiceNetworkServiceAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsVpclatticeServiceNetworkServiceAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsVpclatticeServiceNetworkServiceAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeServiceNetworkServiceAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.items">Items</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifierInput">ServiceNetworkIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.items"></a>

```go
func Items() DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifierInput"></a>

```go
func ServiceIdentifierInput() *string
```

- *Type:* *string

---

##### `ServiceNetworkIdentifierInput`<sup>Optional</sup> <a name="ServiceNetworkIdentifierInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifierInput"></a>

```go
func ServiceNetworkIdentifierInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifier"></a>

```go
func ServiceIdentifier() *string
```

- *Type:* *string

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifier"></a>

```go
func ServiceNetworkIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociationsConfig <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsConfig" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

&dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
	ServiceIdentifier: *string,
	ServiceNetworkIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>*string</code> | ID or ARN of the Service. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>*string</code> | ID or ARN of the Service Network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#region DataAwsVpclatticeServiceNetworkServiceAssociations#region}

---

##### `ServiceIdentifier`<sup>Optional</sup> <a name="ServiceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceIdentifier"></a>

```go
ServiceIdentifier *string
```

- *Type:* *string

ID or ARN of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#service_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_identifier}

---

##### `ServiceNetworkIdentifier`<sup>Optional</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceNetworkIdentifier"></a>

```go
ServiceNetworkIdentifier *string
```

- *Type:* *string

ID or ARN of the Service Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/vpclattice_service_network_service_associations#service_network_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_network_identifier}

---

### DataAwsVpclatticeServiceNetworkServiceAssociationsItems <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItems" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

&dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems {

}
```


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

&dataawsvpclatticeservicenetworkserviceassociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.NewDataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get"></a>

```go
func Get(index *f64) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.NewDataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry</a>

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.NewDataAwsVpclatticeServiceNetworkServiceAssociationsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get"></a>

```go
func Get(index *f64) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsvpclatticeservicenetworkserviceassociations"

dataawsvpclatticeservicenetworkserviceassociations.NewDataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.customDomainName">CustomDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkId">ServiceNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkName">ServiceNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems">DataAwsVpclatticeServiceNetworkServiceAssociationsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.customDomainName"></a>

```go
func CustomDomainName() *string
```

- *Type:* *string

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.dnsEntry"></a>

```go
func DnsEntry() DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkArn"></a>

```go
func ServiceNetworkArn() *string
```

- *Type:* *string

---

##### `ServiceNetworkId`<sup>Required</sup> <a name="ServiceNetworkId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkId"></a>

```go
func ServiceNetworkId() *string
```

- *Type:* *string

---

##### `ServiceNetworkName`<sup>Required</sup> <a name="ServiceNetworkName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkName"></a>

```go
func ServiceNetworkName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsVpclatticeServiceNetworkServiceAssociationsItems
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems">DataAwsVpclatticeServiceNetworkServiceAssociationsItems</a>

---



