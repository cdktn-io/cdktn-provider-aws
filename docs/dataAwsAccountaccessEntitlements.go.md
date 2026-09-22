# `dataAwsAccountaccessEntitlements` Submodule <a name="`dataAwsAccountaccessEntitlements` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessEntitlements <a name="DataAwsAccountaccessEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlements(scope Construct, id *string, config DataAwsAccountaccessEntitlementsConfig) DataAwsAccountaccessEntitlements
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlements_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlements_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlements_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlements_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsAccountaccessEntitlements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsAccountaccessEntitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessEntitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput">ApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements"></a>

```go
func Entitlements() DataAwsAccountaccessEntitlementsEntitlementsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter"></a>

```go
func Filter() DataAwsAccountaccessEntitlementsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a>

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput"></a>

```go
func ApplicationArnInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessEntitlementsConfig <a name="DataAwsAccountaccessEntitlementsConfig" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationArn: *string,
	Filter: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn"></a>

```go
ApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}

---

### DataAwsAccountaccessEntitlementsEntitlements <a name="DataAwsAccountaccessEntitlementsEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsEntitlements {

}
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlement <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement {

}
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole {

}
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal {

}
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter {

}
```


### DataAwsAccountaccessEntitlementsFilter <a name="DataAwsAccountaccessEntitlementsFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsFilter {
	PrincipalRole: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole">PrincipalRole</a></code> | <code>interface{}</code> | principal_role block. |

---

##### `PrincipalRole`<sup>Optional</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole"></a>

```go
PrincipalRole interface{}
```

- *Type:* interface{}

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal_role DataAwsAccountaccessEntitlements#principal_role}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRole <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole {
	AccountId: *string,
	Principal: interface{},
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal">Principal</a></code> | <code>interface{}</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal"></a>

```go
Principal interface{}
```

- *Type:* interface{}

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#principal DataAwsAccountaccessEntitlements#principal}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}.

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal {
	IdentityCenter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter">IdentityCenter</a></code> | <code>interface{}</code> | identity_center block. |

---

##### `IdentityCenter`<sup>Optional</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter"></a>

```go
IdentityCenter interface{}
```

- *Type:* interface{}

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#identity_center DataAwsAccountaccessEntitlements#identity_center}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

&dataawsaccountaccessentitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter {
	GroupId: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessEntitlementsEntitlementsEntitlementList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole"></a>

```go
func PrincipalRole() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessEntitlementsEntitlementsEntitlement
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal"></a>

```go
func Principal() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```go
func IdentityCenter() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsList <a name="DataAwsAccountaccessEntitlementsEntitlementsList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsEntitlementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAccountaccessEntitlementsEntitlementsOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsEntitlementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsEntitlementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement">Entitlement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Entitlement`<sup>Required</sup> <a name="Entitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement"></a>

```go
func Entitlement() DataAwsAccountaccessEntitlementsEntitlementsEntitlementList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a>

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAccountaccessEntitlementsEntitlements
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a>

---


### DataAwsAccountaccessEntitlementsFilterList <a name="DataAwsAccountaccessEntitlementsFilterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole">PutPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole">ResetPrincipalRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipalRole` <a name="PutPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole"></a>

```go
func PutPrincipalRole(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrincipalRole` <a name="ResetPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole"></a>

```go
func ResetPrincipalRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole">PrincipalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput">PrincipalRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalRole`<sup>Required</sup> <a name="PrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole"></a>

```go
func PrincipalRole() DataAwsAccountaccessEntitlementsFilterPrincipalRoleList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a>

---

##### `PrincipalRoleInput`<sup>Optional</sup> <a name="PrincipalRoleInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput"></a>

```go
func PrincipalRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal"></a>

```go
func Principal() DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get"></a>

```go
func Get(index *f64) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawsaccountaccessentitlements"

dataawsaccountaccessentitlements.NewDataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter">PutIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter">ResetIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenter` <a name="PutIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```go
func PutIdentityCenter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentityCenter` <a name="ResetIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```go
func ResetIdentityCenter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter">IdentityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput">IdentityCenterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityCenter`<sup>Required</sup> <a name="IdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```go
func IdentityCenter() DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a>

---

##### `IdentityCenterInput`<sup>Optional</sup> <a name="IdentityCenterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```go
func IdentityCenterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



