# `dataAwsRoute53ResolverRule` Submodule <a name="`dataAwsRoute53ResolverRule` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRule <a name="DataAwsRoute53ResolverRule" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule aws_route53_resolver_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverRule(Construct Scope, string Id, DataAwsRoute53ResolverRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.with">With</a></code> | Applies one or more mixins to this construct. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResolverEndpointId` <a name="ResetResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverEndpointId"></a>

```csharp
private void ResetResolverEndpointId()
```

##### `ResetResolverRuleId` <a name="ResetResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverRuleId"></a>

```csharp
private void ResetResolverRuleId()
```

##### `ResetRuleType` <a name="ResetRuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRuleType"></a>

```csharp
private void ResetRuleType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute53ResolverRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRoute53ResolverRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRoute53ResolverRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRoute53ResolverRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus">ShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.targetIps">TargetIps</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList">DataAwsRoute53ResolverRuleTargetIpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput">ResolverEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput">ResolverRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId">ResolverRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus"></a>

```csharp
public string ShareStatus { get; }
```

- *Type:* string

---

##### `TargetIps`<sup>Required</sup> <a name="TargetIps" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.targetIps"></a>

```csharp
public DataAwsRoute53ResolverRuleTargetIpsList TargetIps { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList">DataAwsRoute53ResolverRuleTargetIpsList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResolverEndpointIdInput`<sup>Optional</sup> <a name="ResolverEndpointIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput"></a>

```csharp
public string ResolverEndpointIdInput { get; }
```

- *Type:* string

---

##### `ResolverRuleIdInput`<sup>Optional</sup> <a name="ResolverRuleIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput"></a>

```csharp
public string ResolverRuleIdInput { get; }
```

- *Type:* string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResolverEndpointId`<sup>Required</sup> <a name="ResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId"></a>

```csharp
public string ResolverEndpointId { get; }
```

- *Type:* string

---

##### `ResolverRuleId`<sup>Required</sup> <a name="ResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId"></a>

```csharp
public string ResolverRuleId { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRuleConfig <a name="DataAwsRoute53ResolverRuleConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName = null,
    string Id = null,
    string Name = null,
    string Region = null,
    string ResolverEndpointId = null,
    string ResolverRuleId = null,
    string RuleType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId">ResolverRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType">RuleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#region DataAwsRoute53ResolverRule#region}

---

##### `ResolverEndpointId`<sup>Optional</sup> <a name="ResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId"></a>

```csharp
public string ResolverEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}.

---

##### `ResolverRuleId`<sup>Optional</sup> <a name="ResolverRuleId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId"></a>

```csharp
public string ResolverRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}.

---

##### `RuleType`<sup>Optional</sup> <a name="RuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}.

---

### DataAwsRoute53ResolverRuleTargetIps <a name="DataAwsRoute53ResolverRuleTargetIps" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverRuleTargetIps {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverRuleTargetIpsList <a name="DataAwsRoute53ResolverRuleTargetIpsList" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverRuleTargetIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.get"></a>

```csharp
private DataAwsRoute53ResolverRuleTargetIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRoute53ResolverRuleTargetIpsOutputReference <a name="DataAwsRoute53ResolverRuleTargetIpsOutputReference" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverRuleTargetIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps">DataAwsRoute53ResolverRuleTargetIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIpsOutputReference.property.internalValue"></a>

```csharp
public DataAwsRoute53ResolverRuleTargetIps InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleTargetIps">DataAwsRoute53ResolverRuleTargetIps</a>

---



