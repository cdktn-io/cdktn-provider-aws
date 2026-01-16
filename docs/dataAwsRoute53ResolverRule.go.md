# `dataAwsRoute53ResolverRule` Submodule <a name="`dataAwsRoute53ResolverRule` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRule <a name="DataAwsRoute53ResolverRule" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule aws_route53_resolver_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.NewDataAwsRoute53ResolverRule(scope Construct, id *string, config DataAwsRoute53ResolverRuleConfig) DataAwsRoute53ResolverRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverEndpointId">ResetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverRuleId">ResetResolverRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRuleType">ResetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResolverEndpointId` <a name="ResetResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverEndpointId"></a>

```go
func ResetResolverEndpointId()
```

##### `ResetResolverRuleId` <a name="ResetResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverRuleId"></a>

```go
func ResetResolverRuleId()
```

##### `ResetRuleType` <a name="ResetRuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRuleType"></a>

```go
func ResetRuleType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRoute53ResolverRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsRoute53ResolverRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsRoute53ResolverRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsRoute53ResolverRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus">ShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.targetIps">TargetIps</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList">DataAwsRoute53ResolverRuleTargetIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput">ResolverEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput">ResolverRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId">ResolverRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus"></a>

```go
func ShareStatus() *string
```

- *Type:* *string

---

##### `TargetIps`<sup>Required</sup> <a name="TargetIps" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.targetIps"></a>

```go
func TargetIps() DataAwsRoute53ResolverRuleTargetIpsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList">DataAwsRoute53ResolverRuleTargetIpsList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResolverEndpointIdInput`<sup>Optional</sup> <a name="ResolverEndpointIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput"></a>

```go
func ResolverEndpointIdInput() *string
```

- *Type:* *string

---

##### `ResolverRuleIdInput`<sup>Optional</sup> <a name="ResolverRuleIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput"></a>

```go
func ResolverRuleIdInput() *string
```

- *Type:* *string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResolverEndpointId`<sup>Required</sup> <a name="ResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId"></a>

```go
func ResolverEndpointId() *string
```

- *Type:* *string

---

##### `ResolverRuleId`<sup>Required</sup> <a name="ResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId"></a>

```go
func ResolverRuleId() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRuleConfig <a name="DataAwsRoute53ResolverRuleConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

&dataawsroute53resolverrule.DataAwsRoute53ResolverRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	Name: *string,
	Region: *string,
	ResolverEndpointId: *string,
	ResolverRuleId: *string,
	RuleType: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId">ResolverRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#region DataAwsRoute53ResolverRule#region}

---

##### `ResolverEndpointId`<sup>Optional</sup> <a name="ResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId"></a>

```go
ResolverEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}.

---

##### `ResolverRuleId`<sup>Optional</sup> <a name="ResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId"></a>

```go
ResolverRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}.

---

##### `RuleType`<sup>Optional</sup> <a name="RuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}.

---

### DataAwsRoute53ResolverRuleTargetIps <a name="DataAwsRoute53ResolverRuleTargetIps" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

&dataawsroute53resolverrule.DataAwsRoute53ResolverRuleTargetIps {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverRuleTargetIpsList <a name="DataAwsRoute53ResolverRuleTargetIpsList" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.NewDataAwsRoute53ResolverRuleTargetIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsRoute53ResolverRuleTargetIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.get"></a>

```go
func Get(index *f64) DataAwsRoute53ResolverRuleTargetIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsRoute53ResolverRuleTargetIpsOutputReference <a name="DataAwsRoute53ResolverRuleTargetIpsOutputReference" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.NewDataAwsRoute53ResolverRuleTargetIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsRoute53ResolverRuleTargetIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps">DataAwsRoute53ResolverRuleTargetIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsRoute53ResolverRuleTargetIps
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps">DataAwsRoute53ResolverRuleTargetIps</a>

---



