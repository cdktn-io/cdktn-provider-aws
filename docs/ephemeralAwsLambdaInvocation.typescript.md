# `ephemeralAwsLambdaInvocation` Submodule <a name="`ephemeralAwsLambdaInvocation` Submodule" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsLambdaInvocation <a name="EphemeralAwsLambdaInvocation" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer"></a>

```typescript
import { ephemeralAwsLambdaInvocation } from '@cdktn/provider-aws'

new ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation(scope: Construct, id: string, config: EphemeralAwsLambdaInvocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig">EphemeralAwsLambdaInvocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig">EphemeralAwsLambdaInvocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext">resetClientContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType">resetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier">resetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetClientContext` <a name="resetClientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext"></a>

```typescript
public resetClientContext(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType"></a>

```typescript
public resetLogType(): void
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier"></a>

```typescript
public resetQualifier(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct"></a>

```typescript
import { ephemeralAwsLambdaInvocation } from '@cdktn/provider-aws'

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement"></a>

```typescript
import { ephemeralAwsLambdaInvocation } from '@cdktn/provider-aws'

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsLambdaInvocation } from '@cdktn/provider-aws'

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion">executedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError">functionError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult">logResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput">clientContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext">clientContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `executedVersion`<sup>Required</sup> <a name="executedVersion" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion"></a>

```typescript
public readonly executedVersion: string;
```

- *Type:* string

---

##### `functionError`<sup>Required</sup> <a name="functionError" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError"></a>

```typescript
public readonly functionError: string;
```

- *Type:* string

---

##### `logResult`<sup>Required</sup> <a name="logResult" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult"></a>

```typescript
public readonly logResult: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `clientContextInput`<sup>Optional</sup> <a name="clientContextInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput"></a>

```typescript
public readonly clientContextInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `clientContext`<sup>Required</sup> <a name="clientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext"></a>

```typescript
public readonly clientContext: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsLambdaInvocationConfig <a name="EphemeralAwsLambdaInvocationConfig" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.Initializer"></a>

```typescript
import { ephemeralAwsLambdaInvocation } from '@cdktn/provider-aws'

const ephemeralAwsLambdaInvocationConfig: ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext">clientContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}.

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext"></a>

```typescript
public readonly clientContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/lambda_invocation#region EphemeralAwsLambdaInvocation#region}

---



