# `xrayIndexingRule` Submodule <a name="`xrayIndexingRule` Submodule" id="@cdktn/provider-aws.xrayIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayIndexingRule <a name="XrayIndexingRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule aws_xray_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

new xrayIndexingRule.XrayIndexingRule(scope: Construct, id: string, config: XrayIndexingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig">XrayIndexingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig">XrayIndexingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule"></a>

```typescript
public putRule(value: IResolvable | XrayIndexingRuleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

xrayIndexingRule.XrayIndexingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

xrayIndexingRule.XrayIndexingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

xrayIndexingRule.XrayIndexingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

xrayIndexingRule.XrayIndexingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XrayIndexingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XrayIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XrayIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule"></a>

```typescript
public readonly rule: XrayIndexingRuleRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | XrayIndexingRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XrayIndexingRuleConfig <a name="XrayIndexingRuleConfig" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

const xrayIndexingRuleConfig: xrayIndexingRule.XrayIndexingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | XrayIndexingRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}

---

### XrayIndexingRuleRule <a name="XrayIndexingRuleRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

const xrayIndexingRuleRule: xrayIndexingRule.XrayIndexingRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic">probabilistic</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]</code> | probabilistic block. |

---

##### `probabilistic`<sup>Optional</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic"></a>

```typescript
public readonly probabilistic: IResolvable | XrayIndexingRuleRuleProbabilistic[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]

probabilistic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#probabilistic XrayIndexingRule#probabilistic}

---

### XrayIndexingRuleRuleProbabilistic <a name="XrayIndexingRuleRuleProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

const xrayIndexingRuleRuleProbabilistic: xrayIndexingRule.XrayIndexingRuleRuleProbabilistic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage">desiredSamplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}. |

---

##### `desiredSamplingPercentage`<sup>Required</sup> <a name="desiredSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage"></a>

```typescript
public readonly desiredSamplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### XrayIndexingRuleRuleList <a name="XrayIndexingRuleRuleList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

new xrayIndexingRule.XrayIndexingRuleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get"></a>

```typescript
public get(index: number): XrayIndexingRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XrayIndexingRuleRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>[]

---


### XrayIndexingRuleRuleOutputReference <a name="XrayIndexingRuleRuleOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

new xrayIndexingRule.XrayIndexingRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic">putProbabilistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic">resetProbabilistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProbabilistic` <a name="putProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic"></a>

```typescript
public putProbabilistic(value: IResolvable | XrayIndexingRuleRuleProbabilistic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]

---

##### `resetProbabilistic` <a name="resetProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic"></a>

```typescript
public resetProbabilistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic">probabilistic</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput">probabilisticInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `probabilistic`<sup>Required</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic"></a>

```typescript
public readonly probabilistic: XrayIndexingRuleRuleProbabilisticList;
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a>

---

##### `probabilisticInput`<sup>Optional</sup> <a name="probabilisticInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput"></a>

```typescript
public readonly probabilisticInput: IResolvable | XrayIndexingRuleRuleProbabilistic[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XrayIndexingRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>

---


### XrayIndexingRuleRuleProbabilisticList <a name="XrayIndexingRuleRuleProbabilisticList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

new xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get"></a>

```typescript
public get(index: number): XrayIndexingRuleRuleProbabilisticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XrayIndexingRuleRuleProbabilistic[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>[]

---


### XrayIndexingRuleRuleProbabilisticOutputReference <a name="XrayIndexingRuleRuleProbabilisticOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer"></a>

```typescript
import { xrayIndexingRule } from '@cdktn/provider-aws'

new xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage">actualSamplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput">desiredSamplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage">desiredSamplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualSamplingPercentage`<sup>Required</sup> <a name="actualSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage"></a>

```typescript
public readonly actualSamplingPercentage: number;
```

- *Type:* number

---

##### `desiredSamplingPercentageInput`<sup>Optional</sup> <a name="desiredSamplingPercentageInput" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput"></a>

```typescript
public readonly desiredSamplingPercentageInput: number;
```

- *Type:* number

---

##### `desiredSamplingPercentage`<sup>Required</sup> <a name="desiredSamplingPercentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage"></a>

```typescript
public readonly desiredSamplingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XrayIndexingRuleRuleProbabilistic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>

---



