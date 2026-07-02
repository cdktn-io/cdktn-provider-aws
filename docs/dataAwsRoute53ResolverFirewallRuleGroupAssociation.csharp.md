# `dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule <a name="`dataAwsRoute53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociation <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociation" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverFirewallRuleGroupAssociation(Construct Scope, string Id, DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRoute53ResolverFirewallRuleGroupAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRoute53ResolverFirewallRuleGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">ManagedOwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime">ModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput">FirewallRuleGroupAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```csharp
public string FirewallRuleGroupId { get; }
```

- *Type:* string

---

##### `ManagedOwnerName`<sup>Required</sup> <a name="ManagedOwnerName" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```csharp
public string ManagedOwnerName { get; }
```

- *Type:* string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```csharp
public string ModificationTime { get; }
```

- *Type:* string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```csharp
public string MutationProtection { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupAssociationIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupAssociationIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationIdInput"></a>

```csharp
public string FirewallRuleGroupAssociationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```csharp
public string FirewallRuleGroupAssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig <a name="DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallRuleGroupAssociationId,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupAssociationId"></a>

```csharp
public string FirewallRuleGroupAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRoute53ResolverFirewallRuleGroupAssociation.DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/route53_resolver_firewall_rule_group_association#region DataAwsRoute53ResolverFirewallRuleGroupAssociation#region}

---



